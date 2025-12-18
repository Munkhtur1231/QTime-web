import { Response } from 'express';
import { ZodType, ZodError } from 'zod';
import { logger } from '../utils/logger';

/**
 * Middleware to validate API response data against Zod schema
 * Ensures GET endpoints return valid arrays that pass Zod validation
 */
export const validateResponse = <T>(schema: ZodType<T>) => {
  return (originalData: unknown): T => {
    try {
      // Validate the response data
      const validatedData = schema.parse(originalData);
      return validatedData;
    } catch (error) {
      if (error instanceof ZodError) {
        logger.error('Response validation failed:', {
          issues: error.issues,
          data: originalData,
        });
        
        // Log but don't throw - we want to return the data anyway in development
        // In production, you might want to throw or return a default value
        console.warn('⚠️  Response validation failed:', error.issues);
      }
      throw error;
    }
  };
};

/**
 * Helper to create array response validator
 */
export const createArrayValidator = <T>(itemSchema: ZodType<T>) => {
  return validateResponse(itemSchema.array());
};

/**
 * Wrap the response handler to include validation
 */
export const withResponseValidation = <T>(
  res: Response,
  data: T,
  validator: (data: unknown) => T
): T => {
  try {
    return validator(data);
  } catch (error) {
    logger.error('Response validation error:', error);
    // In case of validation error, return the original data
    // but log the issue for monitoring
    return data;
  }
};
