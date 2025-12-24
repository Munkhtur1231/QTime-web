import { Request, Response, NextFunction } from 'express';
import { ZodType, ZodError } from 'zod';
import { AppError } from '../utils/AppError';

export const validate = (schema: ZodType) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      // Check if schema is defined
      if (!schema || typeof schema.parseAsync !== 'function') {
        console.error(
          'Invalid schema provided to validate middleware:',
          schema
        );
        next(
          new AppError(
            'Internal validation error: Invalid schema',
            500,
            'INVALID_SCHEMA'
          )
        );
        return;
      }

      // Validate body directly with the schema
      const validated = await schema.parseAsync(req.body);
      // Replace req.body with validated data
      req.body = validated;
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        const errors = error.issues.map((err) => ({
          field: err.path.join('.'),
          message: err.message,
        }));

        // Pass error to Express error handler instead of throwing
        next(
          new AppError(
            `Validation failed: ${errors
              .map((e) => `${e.field}: ${e.message}`)
              .join(', ')}`,
            400,
            'VALIDATION_ERROR'
          )
        );
        return; // Important: prevent further execution
      }
      next(error);
    }
  };
};
