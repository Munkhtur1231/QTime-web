import { BaseRoute } from './base.route';
import { Business } from '@businessdirectory/database';
import { BusinessController } from '../controllers/business.controller';
import {
  CreateBusinessDTO,
  UpdateBusinessDTO,
  createBusinessSchema,
  updateBusinessSchema,
} from '../validation/business.schema';

class BusinessRoute extends BaseRoute<
  Business,
  CreateBusinessDTO,
  UpdateBusinessDTO
> {
  protected override controller: BusinessController;

  constructor() {
    const businessController = new BusinessController();
    super(businessController, createBusinessSchema, updateBusinessSchema);
    this.controller = businessController;
    this.initializeAIRoutes();
  }

  private initializeAIRoutes() {
    // AI-powered semantic search
    this.router.post('/search', this.controller.aiSearch);

    // Clear AI search cache
    this.router.delete('/search/cache', this.controller.clearSearchCache);
  }
}

export default new BusinessRoute().router;
