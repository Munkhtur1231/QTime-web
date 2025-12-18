import { z } from 'zod';

// Base schemas for shared validation
export const ReviewBaseSchema = z.object({
  businessId: z
    .number()
    .int()
    .positive('Business ID must be a positive integer'),
  rating: z.number().int().min(1).max(5, 'Rating must be between 1 and 5'),
  comment: z.string().optional(),
  richContent: z.string().optional(),
});

export const CreateReviewSchema = ReviewBaseSchema;

export const UpdateReviewSchema = ReviewBaseSchema.omit({
  businessId: true,
}).partial();

// Export types
export type CreateReviewInput = z.infer<typeof CreateReviewSchema>;
export type UpdateReviewInput = z.infer<typeof UpdateReviewSchema>;
