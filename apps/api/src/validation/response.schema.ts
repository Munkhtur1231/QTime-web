import { z } from 'zod';

/**
 * Response validation schemas for GET endpoints
 * These ensure that API responses return valid arrays with proper structure
 */

// Base response schemas
export const UserResponseSchema = z.object({
  id: z.number(),
  email: z.string().email(),
  firstName: z.string().nullable(),
  lastName: z.string().nullable(),
  phone: z.string().nullable(),
  role: z.enum(['USER', 'BUSINESS_OWNER', 'ADMIN', 'SUPERADMIN']),
  createdAt: z.date(),
  updatedAt: z.date(),
  hashedPassword: z.string().nullable().optional(),
});

export const BusinessCategoryResponseSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string().nullable(),
  parentCategoryId: z.number().nullable(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const BusinessResponseSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string().nullable(),
  categoryId: z.number(),
  ownerId: z.number(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const ReviewResponseSchema = z.object({
  id: z.number(),
  businessId: z.number(),
  userId: z.number(),
  rating: z.number().min(1).max(5),
  comment: z.string().nullable(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const BusinessAddressResponseSchema = z.object({
  id: z.number(),
  businessId: z.number(),
  street: z.string(),
  city: z.string(),
  state: z.string().nullable(),
  zipCode: z.string().nullable(),
  country: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

// Array response schemas for GET endpoints
export const UsersArrayResponseSchema = z.array(UserResponseSchema);
export const BusinessCategoriesArrayResponseSchema = z.array(BusinessCategoryResponseSchema);
export const BusinessesArrayResponseSchema = z.array(BusinessResponseSchema);
export const ReviewsArrayResponseSchema = z.array(ReviewResponseSchema);
export const BusinessAddressesArrayResponseSchema = z.array(BusinessAddressResponseSchema);

// Paginated response wrapper schema
export const PaginatedResponseSchema = <T extends z.ZodTypeAny>(dataSchema: T) =>
  z.object({
    success: z.boolean(),
    message: z.string().optional(),
    data: dataSchema,
    pagination: z.object({
      page: z.number(),
      limit: z.number(),
      total: z.number(),
      totalPages: z.number(),
    }).optional(),
  });

// Export validated array types
export type UserResponse = z.infer<typeof UserResponseSchema>;
export type BusinessCategoryResponse = z.infer<typeof BusinessCategoryResponseSchema>;
export type BusinessResponse = z.infer<typeof BusinessResponseSchema>;
export type ReviewResponse = z.infer<typeof ReviewResponseSchema>;
export type BusinessAddressResponse = z.infer<typeof BusinessAddressResponseSchema>;
