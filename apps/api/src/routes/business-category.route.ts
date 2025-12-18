import { BaseRoute } from './base.route';
import { BusinessCategory } from '@businessdirectory/database';
import { BusinessCategoryController } from '../controllers/business-category.controller';
import {
  CreateBusinessCategoryDTO,
  UpdateBusinessCategoryDTO,
  createBusinessCategorySchema,
  updateBusinessCategorySchema,
} from '../validation/business-category.schema';

class BusinessCategoryRoute extends BaseRoute<
  BusinessCategory,
  CreateBusinessCategoryDTO,
  UpdateBusinessCategoryDTO
> {
  constructor() {
    super(
      new BusinessCategoryController(),
      createBusinessCategorySchema,
      updateBusinessCategorySchema
    );
  }
}

export default new BusinessCategoryRoute().router;
