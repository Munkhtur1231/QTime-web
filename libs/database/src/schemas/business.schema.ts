import { z } from 'zod';

// Base schemas for shared validation
export const BusinessBaseSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email format'),
  photo: z.string().url('Photo must be a valid URL'),
  link: z.string().url('Link must be a valid URL').optional(),
  summary: z.string().min(1, 'Summary is required'),
  richContent: z.string().min(1, 'Rich content is required'),
  description: z.string().optional(),
  isActive: z.boolean().optional(),
  isInsideMall: z.boolean().optional(),
  categoryId: z
    .number()
    .int()
    .positive('Category ID must be a positive integer'),
});

export const CreateBusinessSchema = BusinessBaseSchema;

export const UpdateBusinessSchema = BusinessBaseSchema.partial();

// Export types
export type CreateBusinessInput = z.infer<typeof CreateBusinessSchema>;
export type UpdateBusinessInput = z.infer<typeof UpdateBusinessSchema>;
