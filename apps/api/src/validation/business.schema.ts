import { z } from 'zod';

// Define schemas directly - validate middleware checks req.body directly
export const createBusinessSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email'),
  photo: z.string().optional().default(''),
  link: z.string().optional().nullable(),
  summary: z.string().min(1, 'Summary is required'),
  richContent: z.string().optional().default(''),
  description: z.string().optional().nullable(),
  isActive: z.boolean().optional().default(true),
  isInsideMall: z.boolean().optional().default(false),
  categoryId: z.number().int().positive('Category ID must be positive'),
});

export const updateBusinessSchema = z.object({
  name: z.string().min(1).optional(),
  email: z.string().email().optional(),
  photo: z.string().optional(),
  link: z.string().optional().nullable(),
  summary: z.string().optional(),
  richContent: z.string().optional(),
  description: z.string().optional().nullable(),
  isActive: z.boolean().optional(),
  isInsideMall: z.boolean().optional(),
  categoryId: z.number().int().positive().optional(),
});

// Export types
export type CreateBusinessDTO = z.infer<typeof createBusinessSchema>;
export type UpdateBusinessDTO = z.infer<typeof updateBusinessSchema>;
