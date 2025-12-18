import { z } from 'zod';
import { UserRole } from '@prisma/client';

// Base schemas for shared validation
export const UserBaseSchema = z.object({
  email: z.string().email('Invalid email format'),
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  phone: z.string().optional(),
  role: z.nativeEnum(UserRole).optional(),
});

export const CreateUserSchema = UserBaseSchema.extend({
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

export const UpdateUserSchema = UserBaseSchema.extend({
  password: z
    .string()
    .min(6, 'Password must be at least 6 characters')
    .optional(),
}).partial();

export const LoginSchema = z.object({
  email: z.string().email('Invalid email format'),
  password: z.string().min(1, 'Password is required'),
});

// Export types
export type CreateUserInput = z.infer<typeof CreateUserSchema>;
export type UpdateUserInput = z.infer<typeof UpdateUserSchema>;
export type LoginInput = z.infer<typeof LoginSchema>;
