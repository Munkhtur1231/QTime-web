import {
  BusinessParentCategory,
  BusinessParentCategoryListResponse,
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
  CreateBusinessParentCategoryDTO,
  UpdateBusinessParentCategoryDTO,
} from '../validation/business-parent-category.schema';

export class BusinessParentCategoryService extends BaseService<
  BusinessParentCategory,
  CreateBusinessParentCategoryDTO,
  UpdateBusinessParentCategoryDTO
> {
  async findAll(
    pagination: PaginationParams,
    sort: SortParams,
    filter: FilterParams
  ): Promise<{ data: BusinessParentCategoryListResponse[]; total: number }> {
    const [data, total] = await Promise.all([
      prisma.businessParentCategory.findMany({
        skip: pagination.skip,
        take: pagination.take,
        orderBy: sort.orderBy,
        where: filter.where,
        include: {
          _count: {
            select: { categories: true },
          },
          categories: true,
        },
      }),
      prisma.businessParentCategory.count({ where: filter.where }),
    ]);

    return { data, total };
  }

  async findById(id: number): Promise<BusinessParentCategory | null> {
    return prisma.businessParentCategory.findUnique({
      where: { id },
      include: {
        _count: {
          select: { categories: true },
        },
      },
    });
  }

  async create(
    data: CreateBusinessParentCategoryDTO
  ): Promise<BusinessParentCategory> {
    // Check if parent category with same name exists
    const existing = await prisma.businessParentCategory.findFirst({
      where: { name: data.name },
    });

    if (existing) {
      throw new AppError(
        'Business parent category with this name already exists',
        400,
        'DUPLICATE_NAME'
      );
    }

    return prisma.businessParentCategory.create({ data });
  }

  async update(
    id: number,
    data: UpdateBusinessParentCategoryDTO
  ): Promise<BusinessParentCategory> {
    // Check if parent category exists
    const existing = await this.findById(id);
    if (!existing) {
      throw new AppError(
        'Business parent category not found',
        404,
        'NOT_FOUND'
      );
    }

    // Check for duplicate name
    if (data.name) {
      const duplicate = await prisma.businessParentCategory.findFirst({
        where: {
          name: data.name,
          NOT: { id },
        },
      });

      if (duplicate) {
        throw new AppError(
          'Business parent category with this name already exists',
          400,
          'DUPLICATE_NAME'
        );
      }
    }

    return prisma.businessParentCategory.update({
      where: { id },
      data,
    });
  }

  async delete(id: number): Promise<void> {
    // Check if parent category exists
    const existing = await this.findById(id);
    if (!existing) {
      throw new AppError(
        'Business parent category not found',
        404,
        'NOT_FOUND'
      );
    }

    // Check if parent category has child categories
    const count = await prisma.businessCategory.count({
      where: { parentCategoryId: id },
    });
    if (count > 0) {
      throw new AppError(
        'Cannot delete parent category with associated categories',
        400,
        'HAS_DEPENDENCIES'
      );
    }

    await prisma.businessParentCategory.delete({ where: { id } });
  }
}
