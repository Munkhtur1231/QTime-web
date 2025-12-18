import { z } from 'zod';
import {
  CreateBusinessCategorySchema,
  UpdateBusinessCategorySchema,
  CreateBusinessCategoryInput,
  UpdateBusinessCategoryInput,
} from '@businessdirectory/database';

// API-specific schemas with body/params wrappers
export const createBusinessCategorySchema = z.object({
  body: CreateBusinessCategorySchema,
});

export const updateBusinessCategorySchema = z.object({
  body: UpdateBusinessCategorySchema,
  params: z.object({
    id: z.string().regex(/^\d+$/, 'ID must be a number'),
  }),
});

// Re-export types from shared schemas
export type CreateBusinessCategoryDTO = CreateBusinessCategoryInput;
export type UpdateBusinessCategoryDTO = UpdateBusinessCategoryInput;
