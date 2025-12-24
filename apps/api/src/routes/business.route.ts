import { Router } from 'express';
import { BusinessController } from '../controllers/business.controller';
import {
  createBusinessSchema,
  updateBusinessSchema,
} from '../validation/business.schema';
import { protect } from '../utils/protect';
import { validate } from '../middlewares/validate';

const router = Router();
const controller = new BusinessController();

// Public routes
router.get('/', controller.getAll);
router.get('/:id', controller.getById);

// AI search routes (public)
router.post('/search', controller.aiSearch);
router.delete('/search/cache', controller.clearSearchCache);

// Protected routes - require authentication
router.post('/', protect, validate(createBusinessSchema), controller.create);
router.patch(
  '/:id',
  protect,
  validate(updateBusinessSchema),
  controller.update
);
router.put('/:id', protect, validate(updateBusinessSchema), controller.update);
router.delete('/:id', protect, controller.delete);

export default router;
