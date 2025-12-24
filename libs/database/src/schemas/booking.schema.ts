import { z } from 'zod';

export const BookingStatusSchema = z.enum([
  'PENDING',
  'CONFIRMED',
  'CANCELLED',
]);

export const BookingBaseSchema = z.object({
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
  // ISO datetime string, e.g. 2025-12-25T09:00:00.000Z
  startAt: z.string().datetime('Огноо/цаг буруу байна'),
  note: z.string().max(500, 'Тайлбар хэт урт байна').optional(),
});

export const CreateBookingSchema = BookingBaseSchema;

// For business owner: allow status update
export const UpdateBookingStatusSchema = z.object({
  status: BookingStatusSchema,
});

export type CreateBookingInput = z.infer<typeof CreateBookingSchema>;
export type UpdateBookingStatusInput = z.infer<
  typeof UpdateBookingStatusSchema
>;
