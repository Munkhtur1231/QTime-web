import { z } from 'zod';
import {
  CreateBusinessSchema,
  UpdateBusinessSchema,
  CreateBusinessInput,
  UpdateBusinessInput,
} from '@businessdirectory/database';

// API-specific schemas with body/params wrappers
export const createBusinessSchema = z.object({
  body: CreateBusinessSchema,
});

export const updateBusinessSchema = z.object({
  body: UpdateBusinessSchema,
  params: z.object({
    id: z.string().regex(/^\d+$/, 'ID must be a number'),
  }),
});

// Re-export types from shared schemas
export type CreateBusinessDTO = CreateBusinessInput;
export type UpdateBusinessDTO = UpdateBusinessInput;
