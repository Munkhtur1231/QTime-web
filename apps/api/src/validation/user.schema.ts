import { z } from 'zod';
import {
  CreateUserSchema,
  UpdateUserSchema,
  LoginSchema,
  CreateUserInput,
  UpdateUserInput,
  LoginInput,
} from '@businessdirectory/database';

// API schemas map directly to req.body (validate middleware validates req.body only)
export const createUserSchema = CreateUserSchema;

export const updateUserSchema = UpdateUserSchema;

export const loginSchema = LoginSchema;

export const oauthLoginSchema = z.object({
  email: z.string().email('Invalid email format'),
  name: z.string().optional(),
});

// Re-export types from shared schemas
export type CreateUserDTO = CreateUserInput;
export type UpdateUserDTO = UpdateUserInput;
export type LoginDTO = LoginInput;
export type OAuthLoginDTO = {
  email: string;
  name?: string;
};
