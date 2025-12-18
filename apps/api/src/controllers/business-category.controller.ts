import { Request } from 'express';
import { BusinessCategory } from '@businessdirectory/database';
import { BaseController } from './base.controller';
import { BusinessCategoryService } from '../services/business-category.service';
import {
  CreateBusinessCategoryDTO,
  UpdateBusinessCategoryDTO,
} from '../validation/business-category.schema';
import { QueryBuilder } from '../utils/pagination';

export class BusinessCategoryController extends BaseController<
  BusinessCategory,
  CreateBusinessCategoryDTO,
  UpdateBusinessCategoryDTO
> {
  constructor() {
    super(new BusinessCategoryService(), 'Business Category');
  }

  protected override getFilterParams(req: Request) {
    const filters = QueryBuilder.getFilters(req, ['name', 'description']);
    const search = QueryBuilder.getSearch(req, ['name', 'description']);

    // Merge filters and search
    return {
      where: {
        ...filters.where,
        ...search.where,
      },
    };
  }
}
