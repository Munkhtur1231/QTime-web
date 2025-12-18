import { Response } from 'express';
import { ZodType } from 'zod';
import { logger } from './logger';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface ApiResponse<T = any> {
  success: boolean;
  message?: string;
  data?: T;
  pagination?: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

/**
 * Validates response data against a Zod schema
 * Used to ensure GET endpoints return valid arrays
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function validateResponseData<T = any>(data: T, schema?: ZodType<T>): T {
  if (!schema) return data;
  
  try {
    return schema.parse(data);
  } catch (error) {
    logger.warn('Response validation warning - data may not match expected schema', {
      error,
    });
    // Return original data but log the validation issue
    return data;
  }
}

export class ResponseHandler {
  static success<T>(
    res: Response,
    data: T,
    message = 'Success',
    statusCode = 200,
    schema?: ZodType<T>
  ): Response {
    // Validate response data if schema is provided
    const validatedData = validateResponseData(data, schema);
    
    const response: ApiResponse<T> = {
      success: true,
      message,
      data: validatedData,
    };
    return res.status(statusCode).json(response);
  }

  static created<T>(
    res: Response,
    data: T,
    message = 'Created',
    schema?: ZodType<T>
  ): Response {
    return this.success(res, data, message, 201, schema);
  }

  static noContent(res: Response): Response {
    return res.status(204).send();
  }

  static paginated<T>(
    res: Response,
    data: T[],
    page: number,
    limit: number,
    total: number,
    message = 'Success',
    schema?: ZodType<T[]>
  ): Response {
    // Validate array data if schema is provided
    const validatedData = validateResponseData(data, schema);
    
    const response: ApiResponse<T[]> = {
      success: true,
      message,
      data: validatedData,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    };
    return res.status(200).json(response);
  }
}
