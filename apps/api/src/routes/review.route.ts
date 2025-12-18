import { BaseRoute } from './base.route';
import { Reviews } from '@businessdirectory/database';
import { ReviewController } from '../controllers/review.controller';
import {
  CreateReviewDTO,
  UpdateReviewDTO,
  createReviewSchema,
  updateReviewSchema,
} from '../validation/review.schema';
import { protect } from '../utils/protect';
import { validate } from '../middlewares/validate';

class ReviewRoute extends BaseRoute<Reviews, CreateReviewDTO, UpdateReviewDTO> {
  constructor() {
    super(new ReviewController(), createReviewSchema, updateReviewSchema);
  }

  protected override initializeRoutes(): void {
    // Public routes
    this.router.get('/', this.controller.getAll);
    this.router.get('/:id', this.controller.getById);

    // Protected routes
    this.router.post(
      '/',
      protect,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      validate(this.createSchema as any),
      this.controller.create
    );
    this.router.put(
      '/:id',
      protect,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      validate(this.updateSchema as any),
      this.controller.update
    );
    this.router.patch(
      '/:id',
      protect,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      validate(this.updateSchema as any),
      this.controller.update
    );
    this.router.delete('/:id', protect, this.controller.delete);
  }
}

export default new ReviewRoute().router;
