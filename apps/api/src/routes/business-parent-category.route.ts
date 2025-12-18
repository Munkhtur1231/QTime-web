import { BaseRoute } from './base.route';
import { BusinessParentCategory } from '@businessdirectory/database';
import { BusinessParentCategoryController } from '../controllers/business-parent-category.controller';
import {
  CreateBusinessParentCategoryDTO,
  UpdateBusinessParentCategoryDTO,
  createBusinessParentCategorySchema,
  updateBusinessParentCategorySchema,
} from '../validation/business-parent-category.schema';

class BusinessParentCategoryRoute extends BaseRoute<
  BusinessParentCategory,
  CreateBusinessParentCategoryDTO,
  UpdateBusinessParentCategoryDTO
> {
  constructor() {
    super(
      new BusinessParentCategoryController(),
      createBusinessParentCategorySchema,
      updateBusinessParentCategorySchema
    );
  }
}

export default new BusinessParentCategoryRoute().router;
