import { Request, Response } from 'express';
import type { Booking } from '@prisma/client';
import { BaseController } from './base.controller';
import { BookingService } from '../services/booking.service';
import {
  CreateBookingDTO,
  UpdateBookingStatusDTO,
} from '../validation/booking.schema';
import { QueryBuilder } from '../utils/pagination';
import { catchAsync } from '../utils/catchAsync';
import { ResponseHandler } from '../utils/response';
import { AuthenticatedRequest } from '../utils/protect';

export class BookingController extends BaseController<
  Booking,
  CreateBookingDTO,
  never
> {
  private bookingService: BookingService;

  constructor() {
    const service = new BookingService();
    super(service, 'Booking');
    this.bookingService = service;
  }

  // Custom filter with date and businessId support
  protected override getFilterParams(req: Request) {
    const baseFilter = QueryBuilder.getFilters(req, [
      'businessId',
      'userId',
      'status',
    ]);
    const where: Record<string, any> = baseFilter.where || {};

    // Date filter for a specific day
    const dateStr = req.query.date as string;
    if (dateStr) {
      const startOfDay = new Date(dateStr);
      startOfDay.setHours(0, 0, 0, 0);
      const endOfDay = new Date(dateStr);
      endOfDay.setHours(23, 59, 59, 999);

      where.startAt = {
        gte: startOfDay,
        lte: endOfDay,
      };
    }

    // BusinessId filter
    const businessId = req.query.businessId;
    if (businessId) {
      where.businessId = parseInt(businessId as string);
    }

    return { where };
  }

  // Public endpoint: get bookings for a business (for checking available slots)
  getBookingsForBusiness = catchAsync(async (req: Request, res: Response) => {
    const pagination = QueryBuilder.getPagination(req);
    const sort = QueryBuilder.getSort(req);
    const filter = this.getFilterParams(req);

    const { data, total } = await this.bookingService.findAll(
      pagination,
      sort,
      filter
    );

    // Only return minimal info (startAt, status) for privacy
    const minimalData = data.map((b) => ({
      id: b.id,
      startAt: b.startAt,
      status: b.status,
    }));

    return ResponseHandler.paginated(
      res,
      minimalData,
      pagination.page,
      pagination.limit,
      total,
      'Bookings retrieved successfully'
    );
  });

  // Only admins should use generic list endpoint
  override getAll = catchAsync(async (req: Request, res: Response) => {
    const authReq = req as AuthenticatedRequest;

    // If businessId query param is present, use public endpoint logic
    if (req.query.businessId && req.query.date) {
      const pagination = QueryBuilder.getPagination(req);
      const sort = QueryBuilder.getSort(req);
      const filter = this.getFilterParams(req);

      const { data, total } = await this.bookingService.findAll(
        pagination,
        sort,
        filter
      );

      // Only return minimal info (startAt, status) for privacy
      const minimalData = data.map((b) => ({
        id: b.id,
        startAt: b.startAt,
        status: b.status,
      }));

      return ResponseHandler.paginated(
        res,
        minimalData,
        pagination.page,
        pagination.limit,
        total,
        'Bookings retrieved successfully'
      );
    }

    if (authReq.userRole !== 'ADMIN' && authReq.userRole !== 'SUPERADMIN') {
      return ResponseHandler.success(res, [], 'Forbidden', 403);
    }

    // Call base logic directly (can't use super with class fields)
    const pagination = QueryBuilder.getPagination(req);
    const sort = QueryBuilder.getSort(req);
    const filter = this.getFilterParams(req);

    const { data, total } = await this.bookingService.findAll(
      pagination,
      sort,
      filter
    );

    return ResponseHandler.paginated(
      res,
      data,
      pagination.page,
      pagination.limit,
      total,
      'Booking retrieved successfully'
    );
  });

  // User dashboard: list own bookings
  getMyBookings = catchAsync(async (req: Request, res: Response) => {
    const authReq = req as AuthenticatedRequest;
    const pagination = QueryBuilder.getPagination(req);
    const sort = QueryBuilder.getSort(req);

    const { data, total } = await this.bookingService.listForUser(
      authReq.userId,
      pagination,
      sort
    );

    return ResponseHandler.paginated(
      res,
      data,
      pagination.page,
      pagination.limit,
      total,
      'Bookings retrieved successfully'
    );
  });

  // Business owner dashboard: list bookings for businesses they administer
  getBusinessBookings = catchAsync(async (req: Request, res: Response) => {
    const authReq = req as AuthenticatedRequest;
    const pagination = QueryBuilder.getPagination(req);
    const sort = QueryBuilder.getSort(req);

    const { data, total } = await this.bookingService.listForBusinessAdmin(
      authReq.userId,
      pagination,
      sort
    );

    return ResponseHandler.paginated(
      res,
      data,
      pagination.page,
      pagination.limit,
      total,
      'Business bookings retrieved successfully'
    );
  });

  // Create booking as authenticated user
  override create = catchAsync(async (req: Request, res: Response) => {
    const authReq = req as AuthenticatedRequest;
    const booking = await this.bookingService.createWithUserId(
      req.body as CreateBookingDTO,
      authReq.userId
    );

    return ResponseHandler.created(
      res,
      booking,
      'Booking created successfully'
    );
  });

  updateStatus = catchAsync(async (req: Request, res: Response) => {
    const authReq = req as AuthenticatedRequest;
    const id = parseInt(req.params.id);

    const updated = await this.bookingService.updateStatus(
      id,
      req.body as UpdateBookingStatusDTO,
      authReq.userId,
      authReq.userRole
    );

    return ResponseHandler.success(res, updated, 'Booking status updated');
  });

  cancel = catchAsync(async (req: Request, res: Response) => {
    const authReq = req as AuthenticatedRequest;
    const id = parseInt(req.params.id);

    const updated = await this.bookingService.cancel(
      id,
      authReq.userId,
      authReq.userRole
    );

    return ResponseHandler.success(res, updated, 'Booking cancelled');
  });
}
