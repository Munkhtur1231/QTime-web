import { z } from 'zod';
import {
  CreateBusinessParentCategorySchema,
  UpdateBusinessParentCategorySchema,
  CreateBusinessParentCategoryInput,
  UpdateBusinessParentCategoryInput,
} from '@businessdirectory/database';

// API-specific schemas with body/params wrappers
export const createBusinessParentCategorySchema = z.object({
  body: CreateBusinessParentCategorySchema,
});

export const updateBusinessParentCategorySchema = z.object({
  body: UpdateBusinessParentCategorySchema,
  params: z.object({
    id: z.string().regex(/^\d+$/, 'ID must be a number'),
  }),
});

// Re-export types from shared schemas
export type CreateBusinessParentCategoryDTO = CreateBusinessParentCategoryInput;
export type UpdateBusinessParentCategoryDTO = UpdateBusinessParentCategoryInput;
