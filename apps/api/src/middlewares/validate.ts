import { Request, Response, NextFunction } from 'express';
import { ZodType, ZodError } from 'zod';
import { AppError } from '../utils/AppError';

export const validate = (schema: ZodType) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync({
        body: req.body,
        query: req.query,
        params: req.params,
      });
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
