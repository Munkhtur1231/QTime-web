import { Request, Response } from 'express';
import { Reviews } from '@businessdirectory/database';
import { BaseController } from './base.controller';
import { ReviewService } from '../services/review.service';
import { CreateReviewDTO, UpdateReviewDTO } from '../validation/review.schema';
import { QueryBuilder } from '../utils/pagination';
import { catchAsync } from '../utils/catchAsync';
import { ResponseHandler } from '../utils/response';
import { AuthenticatedRequest } from '../utils/protect';

export class ReviewController extends BaseController<
  Reviews,
  CreateReviewDTO,
  UpdateReviewDTO
> {
  private reviewService: ReviewService;

  constructor() {
    const service = new ReviewService();
    super(service, 'Review');
    this.reviewService = service;
  }

  protected override getFilterParams(req: Request) {
    const filters = QueryBuilder.getFilters(req, [
      'businessId',
      'userId',
      'rating',
    ]);
    const search = QueryBuilder.getSearch(req, ['comment']);

    return {
      where: {
        ...filters.where,
        ...search.where,
      },
    };
  }

  // Override create to pass userId from auth
  override create = catchAsync(async (req: Request, res: Response) => {
    const authReq = req as AuthenticatedRequest;
    const review = await this.reviewService.createWithUserId(
      req.body as CreateReviewDTO,
      authReq.userId
    );

    return ResponseHandler.created(res, review, 'Review created successfully');
  });

  // Override update to pass userId from auth
  override update = catchAsync(async (req: Request, res: Response) => {
    const authReq = req as AuthenticatedRequest;
    const id = parseInt(req.params.id);
    const review = await this.reviewService.updateWithUserId(
      id,
      req.body as UpdateReviewDTO,
      authReq.userId
    );

    return ResponseHandler.success(res, review, 'Review updated successfully');
  });

  // Override delete to pass userId from auth
  override delete = catchAsync(async (req: Request, res: Response) => {
    const authReq = req as AuthenticatedRequest;
    const id = parseInt(req.params.id);

    // Admin can delete any review
    const userId =
      authReq.userRole === 'ADMIN' || authReq.userRole === 'SUPERADMIN'
        ? undefined
        : authReq.userId;

    await this.reviewService.deleteWithUserId(id, userId);

    return ResponseHandler.noContent(res);
  });
}
