import { Router } from 'express';
import userRoutes from './user.route';
import businessParentCategoryRoutes from './business-parent-category.route';
import businessCategoryRoutes from './business-category.route';
import businessRoutes from './business.route';
import businessAddressRoutes from './business-address.route';
import reviewRoutes from './review.route';
import healthRoutes from './health.route';
import authRoutes from './auth.route';

const router = Router();

// Basic health check
router.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Enhanced health routes with validation demos
router.use('/health', healthRoutes);

// Auth routes (OAuth)
router.use('/auth', authRoutes);

// API Routes
router.use('/users', userRoutes);
router.use('/business-parent-categories', businessParentCategoryRoutes);
router.use('/business-categories', businessCategoryRoutes);
router.use('/businesses', businessRoutes);
router.use('/business-addresses', businessAddressRoutes);
router.use('/reviews', reviewRoutes);

export default router;
