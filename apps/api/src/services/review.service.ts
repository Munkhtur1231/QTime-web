import { Reviews, ReviewsListResponse } from '@businessdirectory/database';
import { BaseService } from './base.service';
import { prisma } from '../utils/prisma';
import {
  PaginationParams,
  SortParams,
  FilterParams,
} from '../utils/pagination';
import { AppError } from '../utils/AppError';
import { CreateReviewDTO, UpdateReviewDTO } from '../validation/review.schema';

export class ReviewService extends BaseService<
  Reviews,
  CreateReviewDTO,
  UpdateReviewDTO
> {
  async findAll(
    pagination: PaginationParams,
    sort: SortParams,
    filter: FilterParams
  ): Promise<{ data: ReviewsListResponse[]; total: number }> {
    const [data, total] = await Promise.all([
      prisma.reviews.findMany({
        skip: pagination.skip,
        take: pagination.take,
        orderBy: sort.orderBy,
        where: filter.where,
        include: {
          user: {
            select: {
              id: true,
              email: true,
              firstName: true,
              lastName: true,
              _count: {
                select: {
                  reviews: true,
                },
              },
            },
          },
          business: {
            select: {
              id: true,
              name: true,
              photo: true,
            },
          },
          richContent: true,
        },
      }),
      prisma.reviews.count({ where: filter.where }),
    ]);

    // Transform user data to include totalReviews
    const transformedData = data.map((review) => ({
      ...review,
      user: {
        ...review.user,
        totalReviews: review.user._count.reviews,
      },
    }));

    // Remove _count from user objects
    const dataWithoutCount = transformedData.map((review) => {
      const { _count, ...userWithoutCount } = review.user;
      return {
        ...review,
        user: userWithoutCount,
      };
    });

    return { data: dataWithoutCount as ReviewsListResponse[], total };
  }

  async findById(id: number): Promise<Reviews | null> {
    return prisma.reviews.findUnique({
      where: { id },
      include: {
        user: {
          select: {
            id: true,
            email: true,
            firstName: true,
            lastName: true,
          },
        },
        business: true,
        richContent: true,
      },
    });
  }

  // Base interface implementation (not used directly in ReviewController)
  async create(_data: CreateReviewDTO): Promise<Reviews> {
    throw new AppError(
      'Use createWithUserId method instead',
      500,
      'METHOD_NOT_IMPLEMENTED'
    );
  }

  async createWithUserId(
    data: CreateReviewDTO,
    userId: number
  ): Promise<Reviews> {
    const business = await prisma.business.findUnique({
      where: { id: data.businessId },
    });

    if (!business) {
      throw new AppError('Business not found', 404, 'BUSINESS_NOT_FOUND');
    }

    // Check if user already reviewed this business
    const existing = await prisma.reviews.findUnique({
      where: {
        businessId_userId: {
          businessId: data.businessId,
          userId,
        },
      },
    });

    if (existing) {
      throw new AppError(
        'You have already reviewed this business',
        400,
        'DUPLICATE_REVIEW'
      );
    }

    const { richContent, ...reviewData } = data;

    const review = await prisma.reviews.create({
      data: {
        ...reviewData,
        userId,
        ...(richContent && {
          richContent: {
            create: {
              content: richContent,
            },
          },
        }),
      },
      include: {
        user: {
          select: {
            id: true,
            email: true,
            firstName: true,
            lastName: true,
          },
        },
        business: true,
        richContent: true,
      },
    });

    return review;
  }

  // Base interface implementation (not used directly in ReviewController)
  async update(_id: number, _data: UpdateReviewDTO): Promise<Reviews> {
    throw new AppError(
      'Use updateWithUserId method instead',
      500,
      'METHOD_NOT_IMPLEMENTED'
    );
  }

  async updateWithUserId(
    id: number,
    data: UpdateReviewDTO,
    userId: number
  ): Promise<Reviews> {
    const existing = await prisma.reviews.findUnique({
      where: { id },
      include: { richContent: true },
    });

    if (!existing) {
      throw new AppError('Review not found', 404, 'NOT_FOUND');
    }

    // Users can only update their own reviews
    if (existing.userId !== userId) {
      throw new AppError(
        'You can only update your own reviews',
        403,
        'FORBIDDEN'
      );
    }

    const { richContent, ...reviewData } = data;

    const review = await prisma.reviews.update({
      where: { id },
      data: {
        ...reviewData,
        ...(richContent && {
          richContent: existing.richContent
            ? {
                update: {
                  content: richContent,
                },
              }
            : {
                create: {
                  content: richContent,
                },
              },
        }),
      },
      include: {
        user: {
          select: {
            id: true,
            email: true,
            firstName: true,
            lastName: true,
          },
        },
        business: true,
        richContent: true,
      },
    });

    return review;
  }

  // Base interface implementation (not used directly in ReviewController)
  async delete(id: number): Promise<void> {
    await this.deleteWithUserId(id);
  }

  async deleteWithUserId(id: number, userId?: number): Promise<void> {
    const existing = await prisma.reviews.findUnique({ where: { id } });
    if (!existing) {
      throw new AppError('Review not found', 404, 'NOT_FOUND');
    }

    // If userId is provided, check ownership
    if (userId && existing.userId !== userId) {
      throw new AppError(
        'You can only delete your own reviews',
        403,
        'FORBIDDEN'
      );
    }

    await prisma.reviews.delete({ where: { id } });
  }
}
