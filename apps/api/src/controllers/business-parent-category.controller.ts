import { Request } from 'express';
import { BusinessParentCategory } from '@businessdirectory/database';
import { BaseController } from './base.controller';
import { BusinessParentCategoryService } from '../services/business-parent-category.service';
import {
  CreateBusinessParentCategoryDTO,
  UpdateBusinessParentCategoryDTO,
} from '../validation/business-parent-category.schema';
import { QueryBuilder } from '../utils/pagination';

export class BusinessParentCategoryController extends BaseController<
  BusinessParentCategory,
  CreateBusinessParentCategoryDTO,
  UpdateBusinessParentCategoryDTO
> {
  constructor() {
    super(new BusinessParentCategoryService(), 'Business Parent Category');
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
