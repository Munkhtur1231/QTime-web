import { BookingListResponse } from '@businessdirectory/database';
import type { Booking, BookingStatus } from '@prisma/client';
import { BaseService } from './base.service';
import { prisma } from '../utils/prisma';
import {
  PaginationParams,
  SortParams,
  FilterParams,
} from '../utils/pagination';
import { AppError } from '../utils/AppError';
import {
  CreateBookingDTO,
  UpdateBookingStatusDTO,
} from '../validation/booking.schema';

export class BookingService extends BaseService<
  Booking,
  CreateBookingDTO,
  never
> {
  // Pylance/TS may lag behind Prisma generation; cast keeps runtime correct.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private prismaAny = prisma as any;

  async findAll(
    pagination: PaginationParams,
    sort: SortParams,
    filter: FilterParams
  ): Promise<{ data: BookingListResponse[]; total: number }> {
    const [data, total] = await Promise.all([
      this.prismaAny.booking.findMany({
        skip: pagination.skip,
        take: pagination.take,
        orderBy: sort.orderBy,
        where: filter.where,
        include: {
          business: {
            select: { id: true, name: true, photo: true },
          },
          user: {
            select: {
              id: true,
              email: true,
              firstName: true,
              lastName: true,
              phone: true,
            },
          },
        },
      }),
      this.prismaAny.booking.count({ where: filter.where }),
    ]);

    return { data: data as BookingListResponse[], total };
  }

  async findById(id: number): Promise<Booking | null> {
    return this.prismaAny.booking.findUnique({ where: { id } });
  }

  async create(_data: CreateBookingDTO): Promise<Booking> {
    throw new AppError(
      'Use createWithUserId method instead',
      500,
      'METHOD_NOT_IMPLEMENTED'
    );
  }

  async createWithUserId(
    data: CreateBookingDTO,
    userId: number
  ): Promise<BookingListResponse> {
    const business = await prisma.business.findUnique({
      where: { id: data.businessId },
      select: { id: true },
    });

    if (!business) {
      throw new AppError('Business not found', 404, 'BUSINESS_NOT_FOUND');
    }

    const startAt = new Date(data.startAt);
    if (Number.isNaN(startAt.getTime())) {
      throw new AppError('Invalid startAt', 400, 'INVALID_START_AT');
    }

    // Prevent double booking for same business+time (single-staff assumption)
    const existing = await this.prismaAny.booking.findUnique({
      where: {
        businessId_startAt: {
          businessId: data.businessId,
          startAt,
        },
      },
    });

    if (existing) {
      throw new AppError(
        'This time slot is already booked',
        400,
        'TIME_SLOT_TAKEN'
      );
    }

    const booking = await this.prismaAny.booking.create({
      data: {
        businessId: data.businessId,
        userId,
        customerName: data.customerName,
        customerPhone: data.customerPhone,
        startAt,
        note: data.note,
      },
      include: {
        business: { select: { id: true, name: true, photo: true } },
        user: {
          select: {
            id: true,
            email: true,
            firstName: true,
            lastName: true,
            phone: true,
          },
        },
      },
    });

    return booking as BookingListResponse;
  }

  async update(_id: number, _data: never): Promise<Booking> {
    throw new AppError(
      'Update not supported. Use updateStatus/cancel.',
      500,
      'METHOD_NOT_IMPLEMENTED'
    );
  }

  async delete(_id: number): Promise<void> {
    throw new AppError(
      'Delete not supported. Use cancel.',
      500,
      'METHOD_NOT_IMPLEMENTED'
    );
  }

  async listForUser(
    userId: number,
    pagination: PaginationParams,
    sort: SortParams
  ): Promise<{ data: BookingListResponse[]; total: number }> {
    return this.findAll(pagination, sort, {
      where: { userId },
    });
  }

  async listForBusinessAdmin(
    adminUserId: number,
    pagination: PaginationParams,
    sort: SortParams
  ): Promise<{ data: BookingListResponse[]; total: number }> {
    const adminBusinesses = await prisma.businessAdmin.findMany({
      where: { userId: adminUserId },
      select: { businessId: true },
    });

    const businessIds = adminBusinesses.map((b) => b.businessId);

    if (businessIds.length === 0) {
      return { data: [], total: 0 };
    }

    return this.findAll(pagination, sort, {
      where: { businessId: { in: businessIds } },
    });
  }

  async updateStatus(
    id: number,
    data: UpdateBookingStatusDTO,
    actorUserId: number,
    actorRole: string
  ): Promise<BookingListResponse> {
    const existing = await this.prismaAny.booking.findUnique({
      where: { id },
      select: { id: true, businessId: true },
    });

    if (!existing) {
      throw new AppError('Booking not found', 404, 'NOT_FOUND');
    }

    const isAdmin = actorRole === 'ADMIN' || actorRole === 'SUPERADMIN';

    if (!isAdmin) {
      const isBusinessAdmin = await prisma.businessAdmin.findFirst({
        where: {
          businessId: existing.businessId,
          userId: actorUserId,
        },
        select: { id: true },
      });

      if (!isBusinessAdmin) {
        throw new AppError('Forbidden', 403, 'FORBIDDEN');
      }
    }

    const updated = await this.prismaAny.booking.update({
      where: { id },
      data: { status: data.status as BookingStatus },
      include: {
        business: { select: { id: true, name: true, photo: true } },
        user: {
          select: {
            id: true,
            email: true,
            firstName: true,
            lastName: true,
            phone: true,
          },
        },
      },
    });

    return updated as BookingListResponse;
  }

  async cancel(
    id: number,
    actorUserId: number,
    actorRole: string
  ): Promise<BookingListResponse> {
    const existing = await this.prismaAny.booking.findUnique({
      where: { id },
      select: { id: true, userId: true, businessId: true },
    });

    if (!existing) {
      throw new AppError('Booking not found', 404, 'NOT_FOUND');
    }

    const isAdmin = actorRole === 'ADMIN' || actorRole === 'SUPERADMIN';

    const isOwner = existing.userId === actorUserId;

    let isBusinessAdmin = false;
    if (!isOwner && !isAdmin) {
      const ba = await prisma.businessAdmin.findFirst({
        where: { businessId: existing.businessId, userId: actorUserId },
        select: { id: true },
      });
      isBusinessAdmin = !!ba;
    }

    if (!isOwner && !isAdmin && !isBusinessAdmin) {
      throw new AppError('Forbidden', 403, 'FORBIDDEN');
    }

    const updated = await this.prismaAny.booking.update({
      where: { id },
      data: { status: 'CANCELLED' },
      include: {
        business: { select: { id: true, name: true, photo: true } },
        user: {
          select: {
            id: true,
            email: true,
            firstName: true,
            lastName: true,
            phone: true,
          },
        },
      },
    });

    return updated as BookingListResponse;
  }
}
