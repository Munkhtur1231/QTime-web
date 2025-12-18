import { z } from 'zod';

// Base schemas for shared validation
export const BusinessParentCategoryBaseSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  description: z.string().min(1, 'Description is required'),
  icon: z.string().min(1, 'Icon is required'),
});

export const CreateBusinessParentCategorySchema =
  BusinessParentCategoryBaseSchema;

export const UpdateBusinessParentCategorySchema =
  BusinessParentCategoryBaseSchema.partial();

// Export types
export type CreateBusinessParentCategoryInput = z.infer<
  typeof CreateBusinessParentCategorySchema
>;
export type UpdateBusinessParentCategoryInput = z.infer<
  typeof UpdateBusinessParentCategorySchema
>;
