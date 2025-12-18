import { Request, Response, NextFunction } from 'express';
import { logger } from '../utils/logger';
import { AppError } from '../utils/AppError';

export const errorHandler = (
  err: Error | AppError,
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  const statusCode = 'statusCode' in err ? err.statusCode : 500;
  const message = err.message || 'Internal Server Error';
  const code = 'errorCode' in err ? err.errorCode : 'INTERNAL_SERVER_ERROR';
  // Log the error details
  console.error('Error details:', {
    message: err.message,
    statusCode,
    code,
    stack: err.stack,
  });

  // Log to Winston logger
  logger.error({
    message: err.message,
    statusCode,
    code,
    stack: err.stack,
  });

  res.status(statusCode).json({
    success: false,
    statusCode,
    code,
    message,
    stack: process.env.NODE_ENV === 'production' ? undefined : err.stack,
  });
};
