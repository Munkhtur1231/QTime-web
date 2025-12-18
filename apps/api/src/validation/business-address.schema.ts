import { z } from 'zod';
import {
  CreateBusinessAddressSchema,
  UpdateBusinessAddressSchema,
  CreateBusinessAddressInput,
  UpdateBusinessAddressInput,
} from '@businessdirectory/database';

// API-specific schemas with body/params wrappers
export const createBusinessAddressSchema = z.object({
  body: CreateBusinessAddressSchema,
});

export const updateBusinessAddressSchema = z.object({
  body: UpdateBusinessAddressSchema,
  params: z.object({
    id: z.string().regex(/^\d+$/, 'ID must be a number'),
  }),
});

// Re-export types from shared schemas
export type CreateBusinessAddressDTO = CreateBusinessAddressInput;
export type UpdateBusinessAddressDTO = UpdateBusinessAddressInput;
