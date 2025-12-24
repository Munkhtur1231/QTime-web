import { Router } from 'express';
import { BookingController } from '../controllers/booking.controller';
import { protect } from '../utils/protect';
import { validate } from '../middlewares/validate';
import {
  createBookingSchema,
  updateBookingStatusSchema,
} from '../validation/booking.schema';

const router = Router();
const controller = new BookingController();

// Public: Get bookings for a business (for checking available slots)
// Query params: businessId, date (YYYY-MM-DD)
router.get('/slots', controller.getBookingsForBusiness);

// Admin-only full list
router.get('/', protect, controller.getAll);

// User dashboard
router.get('/me', protect, controller.getMyBookings);

// Business owner dashboard
router.get('/business', protect, controller.getBusinessBookings);

// Create booking
router.post('/', protect, validate(createBookingSchema), controller.create);

// Business owner/admin: update status
router.patch(
  '/:id/status',
  protect,
  validate(updateBookingStatusSchema),
  controller.updateStatus
);

// User/business/admin: cancel
router.patch('/:id/cancel', protect, controller.cancel);

export default router;
