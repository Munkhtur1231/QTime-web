import { z } from 'zod';

// Base schemas for shared validation
export const BusinessAddressBaseSchema = z.object({
  businessId: z
    .number()
    .int()
    .positive('Business ID must be a positive integer'),
  address: z.string().min(1, 'Address is required'),
  latitude: z.number().min(-90).max(90, 'Latitude must be between -90 and 90'),
  longitude: z
    .number()
    .min(-180)
    .max(180, 'Longitude must be between -180 and 180'),
});

export const CreateBusinessAddressSchema = BusinessAddressBaseSchema;

export const UpdateBusinessAddressSchema = BusinessAddressBaseSchema.partial();

// Export types
export type CreateBusinessAddressInput = z.infer<
  typeof CreateBusinessAddressSchema
>;
export type UpdateBusinessAddressInput = z.infer<
  typeof UpdateBusinessAddressSchema
>;
