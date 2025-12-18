import {
  BusinessCategory,
  BusinessCategoryListResponse,
} from '@businessdirectory/database';
import { BaseService } from './base.service';
import { prisma } from '../utils/prisma';
import {
  PaginationParams,
  SortParams,
  FilterParams,
} from '../utils/pagination';
import { AppError } from '../utils/AppError';
import {
  CreateBusinessCategoryDTO,
  UpdateBusinessCategoryDTO,
} from '../validation/business-category.schema';

export class BusinessCategoryService extends BaseService<
  BusinessCategory,
  CreateBusinessCategoryDTO,
  UpdateBusinessCategoryDTO
> {
  async findAll(
    pagination: PaginationParams,
    sort: SortParams,
    filter: FilterParams
  ): Promise<{ data: BusinessCategoryListResponse[]; total: number }> {
    const [data, total] = await Promise.all([
      prisma.businessCategory.findMany({
        skip: pagination.skip,
        take: pagination.take,
        orderBy: sort.orderBy,
        where: filter.where,
        include: {
          _count: {
            select: { businesses: true },
          },
          parentCategory: {
            select: {
              icon: true,
              id: true,
              name: true,
            },
          },
        },
      }),
      prisma.businessCategory.count({ where: filter.where }),
    ]);

    return { data: data as BusinessCategoryListResponse[], total };
  }

  async findById(id: number): Promise<BusinessCategory | null> {
    return prisma.businessCategory.findUnique({
      where: { id },
      include: {
        _count: {
          select: { businesses: true },
        },
      },
    });
  }

  async create(data: CreateBusinessCategoryDTO): Promise<BusinessCategory> {
    // Check if category with same name exists
    const existing = await prisma.businessCategory.findFirst({
      where: { name: data.name },
    });

    if (existing) {
      throw new AppError(
        'Business category with this name already exists',
        400,
        'DUPLICATE_NAME'
      );
    }

    return prisma.businessCategory.create({ data });
  }

  async update(
    id: number,
    data: UpdateBusinessCategoryDTO
  ): Promise<BusinessCategory> {
    // Check if category exists
    const existing = await this.findById(id);
    if (!existing) {
      throw new AppError('Business category not found', 404, 'NOT_FOUND');
    }

    // Check for duplicate name
    if (data.name) {
      const duplicate = await prisma.businessCategory.findFirst({
        where: {
          name: data.name,
          NOT: { id },
        },
      });

      if (duplicate) {
        throw new AppError(
          'Business category with this name already exists',
          400,
          'DUPLICATE_NAME'
        );
      }
    }

    return prisma.businessCategory.update({
      where: { id },
      data,
    });
  }

  async delete(id: number): Promise<void> {
    // Check if category exists
    const existing = await this.findById(id);
    if (!existing) {
      throw new AppError('Business category not found', 404, 'NOT_FOUND');
    }

    // Check if category has businesses
    const count = await prisma.business.count({ where: { categoryId: id } });
    if (count > 0) {
      throw new AppError(
        'Cannot delete category with associated businesses',
        400,
        'HAS_DEPENDENCIES'
      );
    }

    await prisma.businessCategory.delete({ where: { id } });
  }
}
