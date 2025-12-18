import { BusinessAddress } from '@businessdirectory/database';
import { BaseService } from './base.service';
import { prisma } from '../utils/prisma';
import {
  PaginationParams,
  SortParams,
  FilterParams,
} from '../utils/pagination';
import { AppError } from '../utils/AppError';
import {
  CreateBusinessAddressDTO,
  UpdateBusinessAddressDTO,
} from '../validation/business-address.schema';

export class BusinessAddressService extends BaseService<
  BusinessAddress,
  CreateBusinessAddressDTO,
  UpdateBusinessAddressDTO
> {
  async findAll(
    pagination: PaginationParams,
    sort: SortParams,
    filter: FilterParams
  ): Promise<{ data: BusinessAddress[]; total: number }> {
    const [data, total] = await Promise.all([
      prisma.businessAddress.findMany({
        skip: pagination.skip,
        take: pagination.take,
        orderBy: sort.orderBy,
        where: filter.where,
        include: {
          business: {
            select: {
              id: true,
              name: true,
            },
          },
        },
      }),
      prisma.businessAddress.count({ where: filter.where }),
    ]);

    return { data, total };
  }

  async findById(id: number): Promise<BusinessAddress | null> {
    return prisma.businessAddress.findUnique({
      where: { id },
      include: {
        business: true,
      },
    });
  }

  async create(data: CreateBusinessAddressDTO): Promise<BusinessAddress> {
    const business = await prisma.business.findUnique({
      where: { id: data.businessId },
    });

    if (!business) {
      throw new AppError('Business not found', 404, 'BUSINESS_NOT_FOUND');
    }

    return prisma.businessAddress.create({
      data,
      include: {
        business: true,
      },
    });
  }

  async update(
    id: number,
    data: UpdateBusinessAddressDTO
  ): Promise<BusinessAddress> {
    const existing = await prisma.businessAddress.findUnique({ where: { id } });
    if (!existing) {
      throw new AppError('Business address not found', 404, 'NOT_FOUND');
    }

    if (data.businessId) {
      const business = await prisma.business.findUnique({
        where: { id: data.businessId },
      });

      if (!business) {
        throw new AppError('Business not found', 404, 'BUSINESS_NOT_FOUND');
      }
    }

    return prisma.businessAddress.update({
      where: { id },
      data,
      include: {
        business: true,
      },
    });
  }

  async delete(id: number): Promise<void> {
    const existing = await prisma.businessAddress.findUnique({ where: { id } });
    if (!existing) {
      throw new AppError('Business address not found', 404, 'NOT_FOUND');
    }

    await prisma.businessAddress.delete({ where: { id } });
  }
}
