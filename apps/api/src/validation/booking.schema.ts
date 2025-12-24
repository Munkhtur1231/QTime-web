import { z } from 'zod';

// Define schemas directly to avoid import issues
export const BookingStatusSchema = z.enum([
  'PENDING',
  'CONFIRMED',
  'CANCELLED',
]);

export const createBookingSchema = z.object({
  businessId: z
    .number()
    .int()
    .positive('Business ID must be a positive integer'),
  customerName: z
    .string()
    .min(1, 'Нэр оруулна уу')
    .max(100, 'Нэр хэт урт байна'),
  customerPhone: z
    .string()
    .min(6, 'Утасны дугаар буруу байна')
    .max(30, 'Утасны дугаар буруу байна'),
  startAt: z.string().datetime('Огноо/цаг буруу байна'),
  note: z.string().max(500, 'Тайлбар хэт урт байна').optional(),
});

export const updateBookingStatusSchema = z.object({
  status: BookingStatusSchema,
});

export type CreateBookingDTO = z.infer<typeof createBookingSchema>;
export type UpdateBookingStatusDTO = z.infer<typeof updateBookingStatusSchema>;
