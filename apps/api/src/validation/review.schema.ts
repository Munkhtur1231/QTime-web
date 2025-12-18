import { z } from 'zod';
import {
  CreateReviewSchema,
  UpdateReviewSchema,
  CreateReviewInput,
  UpdateReviewInput,
} from '@businessdirectory/database';

// API-specific schemas with body/params wrappers
export const createReviewSchema = z.object({
  body: CreateReviewSchema,
});

export const updateReviewSchema = z.object({
  body: UpdateReviewSchema,
  params: z.object({
    id: z.string().regex(/^\d+$/, 'ID must be a number'),
  }),
});

// Re-export types from shared schemas
export type CreateReviewDTO = CreateReviewInput;
export type UpdateReviewDTO = UpdateReviewInput;
