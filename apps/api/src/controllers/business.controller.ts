import { Request, Response } from 'express';
import { Business } from '@businessdirectory/database';
import { BaseController } from './base.controller';
import { BusinessService } from '../services/business.service';
import {
  CreateBusinessDTO,
  UpdateBusinessDTO,
} from '../validation/business.schema';
import { QueryBuilder } from '../utils/pagination';
import { AiSearchService } from '../services/ai-search.service';
import { catchAsync } from '../utils/catchAsync';
import { ResponseHandler } from '../utils/response';
import { AppError } from '../utils/AppError';
import { prisma } from '../utils/prisma';

export class BusinessController extends BaseController<
  Business,
  CreateBusinessDTO,
  UpdateBusinessDTO
> {
  private aiSearchService: AiSearchService;

  constructor() {
    super(new BusinessService(), 'Business');
    this.aiSearchService = new AiSearchService();
  }

  protected override getFilterParams(req: Request) {
    const filters = QueryBuilder.getFilters(req, [
      'name',
      'email',
      'categoryId',
      'isActive',
      'isInsideMall',
    ]);
    const search = QueryBuilder.getSearch(req, [
      'name',
      'summary',
      'description',
    ]);

    // Check if filtering by adminUserId
    const adminUserId = req.query.adminUserId;
    let adminFilter = {};

    if (adminUserId) {
      adminFilter = {
        admins: {
          some: {
            userId: parseInt(adminUserId as string),
          },
        },
      };
    }

    return {
      where: {
        ...filters.where,
        ...search.where,
        ...adminFilter,
      },
    };
  }

  /**
   * Override create to add current user as admin
   */
  override create = catchAsync(async (req: Request, res: Response) => {
    const item = await this.service.create(req.body as CreateBusinessDTO);

    // Add current user as admin of the new business
    const userId = (req as any).userId;
    if (userId && item.id) {
      await prisma.businessAdmin.create({
        data: {
          businessId: item.id,
          userId: typeof userId === 'string' ? parseInt(userId) : userId,
        },
      });
    }

    return ResponseHandler.created(
      res,
      item,
      `${this.resourceName} created successfully`
    );
  });

  /**
   * AI-powered semantic search
   * POST /business/search
   */
  aiSearch = catchAsync(async (req: Request, res: Response) => {
    const { question, city, topN } = req.body;

    if (!question || typeof question !== 'string') {
      throw new AppError('Question is required and must be a string', 400);
    }

    const result = await this.aiSearchService.search(question, city, topN || 5);

    return ResponseHandler.success(
      res,
      result,
      'AI search completed successfully'
    );
  });

  /**
   * Clear AI search cache
   * DELETE /business/search/cache
   */
  clearSearchCache = catchAsync(async (req: Request, res: Response) => {
    const { question, city } = req.body;

    if (question) {
      await this.aiSearchService.clearCache(question, city);
      return ResponseHandler.success(
        res,
        null,
        'Cache cleared for specific query'
      );
    } else {
      const count = await this.aiSearchService.clearAllCache();
      return ResponseHandler.success(
        res,
        { clearedCount: count },
        `Cleared ${count} cache entries`
      );
    }
  });
}
