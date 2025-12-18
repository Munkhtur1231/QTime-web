import { z } from 'zod';

// Base schemas for shared validation
export const BusinessCategoryBaseSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  description: z.string().min(1, 'Description is required'),
  parentCategoryId: z.number().int().positive(),
  icon: z.string().min(1, 'Icon is required'),
});

export const CreateBusinessCategorySchema = BusinessCategoryBaseSchema;

export const UpdateBusinessCategorySchema =
  BusinessCategoryBaseSchema.partial();

// Export types
export type CreateBusinessCategoryInput = z.infer<
  typeof CreateBusinessCategorySchema
>;
export type UpdateBusinessCategoryInput = z.infer<
  typeof UpdateBusinessCategorySchema
>;
