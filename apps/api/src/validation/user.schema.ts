import { z } from 'zod';
import {
  CreateUserSchema,
  UpdateUserSchema,
  LoginSchema,
  CreateUserInput,
  UpdateUserInput,
  LoginInput,
} from '@businessdirectory/database';

// API-specific schemas with body/params wrappers
export const createUserSchema = z.object({
  body: CreateUserSchema,
});

export const updateUserSchema = z.object({
  body: UpdateUserSchema,
  params: z.object({
    id: z.string().regex(/^\d+$/, 'ID must be a number'),
  }),
});

export const loginSchema = z.object({
  body: LoginSchema,
});

export const oauthLoginSchema = z.object({
  body: z.object({
    email: z.string().email('Invalid email format'),
    name: z.string().optional(),
  }),
});

// Re-export types from shared schemas
export type CreateUserDTO = CreateUserInput;
export type UpdateUserDTO = UpdateUserInput;
export type LoginDTO = LoginInput;
export type OAuthLoginDTO = {
  email: string;
  name?: string;
};
