import {
  Business,
  BusinessProfileResponse,
  BusinessWithExtras,
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
  CreateBusinessDTO,
  UpdateBusinessDTO,
} from '../validation/business.schema';
import { revalidateCacheTag } from '../helpers/revalidateCache';

export class BusinessService extends BaseService<
  Business,
  CreateBusinessDTO,
  UpdateBusinessDTO
> {
  async findAll(
    pagination: PaginationParams,
    sort: SortParams,
    filter: FilterParams
  ): Promise<{ data: BusinessWithExtras[]; total: number }> {
    const [data, total] = await Promise.all([
      prisma.business.findMany({
        skip: pagination.skip,
        take: pagination.take,
        orderBy: sort.orderBy,
        where: filter.where,
        include: {
          reviews: {
            select: {
              rating: true,
            },
          },

          category: {
            select: {
              id: true,
              icon: true,
              name: true,
              parentCategory: {
                select: {
                  icon: true,
                  name: true,
                },
              },
            },
          },
          addresses: true,
          _count: {
            select: {
              reviews: true,
              admins: true,
            },
          },
        },
      }),
      prisma.business.count({ where: filter.where }),
    ]);
    // find average review rating

    const dataWithAverage = data.map((business) => {
      const avg =
        business.reviews.length > 0
          ? (
              business.reviews.reduce((sum, r) => sum + r.rating, 0) /
              business.reviews.length
            ).toFixed(1)
          : null;

      //omit reviews list from data
      const { reviews: _, ...businessWithoutReviews } = business;
      return { ...businessWithoutReviews, averageReviewRating: avg };
    });

    return { data: dataWithAverage as BusinessWithExtras[], total };
  }

  async findById(id: number): Promise<BusinessProfileResponse | null> {
    const business = await prisma.business.findUnique({
      where: { id },
      include: {
        category: {
          select: {
            id: true,
            name: true,
            icon: true,
            parentCategory: {
              select: {
                id: true,
                name: true,
                icon: true,
              },
            },
          },
        },
        addresses: true,
        admins: {
          include: {
            user: {
              select: {
                id: true,
                email: true,
                firstName: true,
                lastName: true,
              },
            },
          },
        },
        reviews: {
          select: {
            rating: true,
          },
        },
        _count: {
          select: {
            reviews: true,
            admins: true,
          },
        },
      },
    });

    if (!business) {
      return null;
    }

    // Calculate review statistics
    const totalReviews = business.reviews.length;
    const averageRating =
      totalReviews > 0
        ? (
            business.reviews.reduce((sum, review) => sum + review.rating, 0) /
            totalReviews
          ).toFixed(1)
        : null;

    // Calculate rating distribution
    const ratingDistribution = {
      oneStar: business.reviews.filter((r) => r.rating === 1).length,
      twoStar: business.reviews.filter((r) => r.rating === 2).length,
      threeStar: business.reviews.filter((r) => r.rating === 3).length,
      fourStar: business.reviews.filter((r) => r.rating === 4).length,
      fiveStar: business.reviews.filter((r) => r.rating === 5).length,
    };

    // Calculate rating percentages
    const ratingPercentages = {
      oneStar:
        totalReviews > 0
          ? (ratingDistribution.oneStar / totalReviews) * 100
          : 0,
      twoStar:
        totalReviews > 0
          ? (ratingDistribution.twoStar / totalReviews) * 100
          : 0,
      threeStar:
        totalReviews > 0
          ? (ratingDistribution.threeStar / totalReviews) * 100
          : 0,
      fourStar:
        totalReviews > 0
          ? (ratingDistribution.fourStar / totalReviews) * 100
          : 0,
      fiveStar:
        totalReviews > 0
          ? (ratingDistribution.fiveStar / totalReviews) * 100
          : 0,
    };

    // Remove reviews from the response and add review statistics
    const { reviews: _, ...businessWithoutReviews } = business;

    return {
      ...businessWithoutReviews,
      reviewStatistics: {
        totalReviews,
        averageRating,
        ratingDistribution,
        ratingPercentages,
      },
    } as BusinessProfileResponse;
  }

  async create(data: CreateBusinessDTO): Promise<Business> {
    // Verify category exists
    const category = await prisma.businessCategory.findUnique({
      where: { id: data.categoryId },
    });

    if (!category) {
      throw new AppError(
        'Business category not found',
        404,
        'CATEGORY_NOT_FOUND'
      );
    }

    return prisma.business.create({
      data,
      include: {
        category: true,
        addresses: true,
      },
    });
  }

  async update(id: number, data: UpdateBusinessDTO): Promise<Business> {
    console.log('update', id, data);
    console.log(`${process.env.NEXT_PUBLIC_FRONT_URL}/api/revalidate`);
    console.log(`Bearer ${process.env.REVALIDATION_SECRET}`);
    const existing = await prisma.business.findUnique({ where: { id } });
    if (!existing) {
      throw new AppError('Business not found', 404, 'NOT_FOUND');
    }

    // Verify category exists if provided
    if (data.categoryId) {
      const category = await prisma.businessCategory.findUnique({
        where: { id: data.categoryId },
      });

      if (!category) {
        throw new AppError(
          'Business category not found',
          404,
          'CATEGORY_NOT_FOUND'
        );
      }
    }
    await revalidateCacheTag(`business-${id}`);

    return prisma.business.update({
      where: { id },
      data,
      include: {
        category: true,
        addresses: true,
      },
    });
  }

  async delete(id: number): Promise<void> {
    const existing = await prisma.business.findUnique({ where: { id } });
    if (!existing) {
      throw new AppError('Business not found', 404, 'NOT_FOUND');
    }

    await prisma.business.delete({ where: { id } });
  }
}
