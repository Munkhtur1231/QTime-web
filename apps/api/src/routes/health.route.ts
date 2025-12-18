import { Router, Request, Response } from 'express';
import { z } from 'zod';
import { ResponseHandler } from '../utils/response';
import { catchAsync } from '../utils/catchAsync';
import { validate } from '../middlewares/validate';
import { AppError } from '../utils/AppError';
import { authorize, protect } from '../utils/protect';

const router = Router();

// Response schema for health check - demonstrates array validation
const HealthCheckResponseSchema = z.object({
  status: z.string(),
  timestamp: z.string(),
  uptime: z.number(),
  environment: z.string(),
  services: z.array(
    z.object({
      name: z.string(),
      status: z.enum(['healthy', 'unhealthy']),
    })
  ),
});

// Test schema for POST validation - demonstrates 400 error on invalid input
const TestInputSchema = z.object({
  body: z.object({
    email: z.string().email('Invalid email format'),
    age: z.number().min(0).max(150, 'Age must be between 0 and 150'),
    name: z.string().min(2, 'Name must be at least 2 characters'),
  }),
});

/**
 * GET /api/v1/health
 * Returns health status with validated array response
 * Demonstrates: GET endpoint returning valid array (Zod validation)
 */
router.get(
  '/detailed',
  catchAsync(async (req: Request, res: Response) => {
    const healthData = {
      status: 'ok',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      environment: process.env.NODE_ENV || 'development',
      services: [
        { name: 'database', status: 'healthy' as const },
        { name: 'api', status: 'healthy' as const },
      ],
    };

    // Validate response with Zod schema before sending
    const validatedData = HealthCheckResponseSchema.parse(healthData);

    return ResponseHandler.success(
      res,
      validatedData,
      'Health check passed - Array validation successful'
    );
  })
);
router.post(
  '/testSuperadmin',
  protect,
  authorize(['SUPERADMIN']),
  catchAsync(async (req: Request, res: Response) => {
    return ResponseHandler.success(
      res,
      { message: 'You are Super Admin, Harry Potter.' },
      'You are Super Admin, Harry Potter.'
    );
  })
);

/**
 * POST /api/v1/health/test
 * Test endpoint for validation - returns 400 on invalid input
 * Demonstrates: Error handling with 400 status on invalid POST input
 */
router.post(
  '/test',
  validate(TestInputSchema),
  catchAsync(async (req: Request, res: Response) => {
    return ResponseHandler.success(
      res,
      { message: 'Validation passed', input: req.body },
      'Test successful'
    );
  })
);

/**
 * GET /api/v1/health/test-array
 * Returns a validated array of items
 * Demonstrates: GET endpoint returning valid array with Zod validation
 */
router.get(
  '/test-array',
  catchAsync(async (req: Request, res: Response) => {
    const TestArraySchema = z.array(
      z.object({
        id: z.number(),
        name: z.string(),
        active: z.boolean(),
      })
    );

    const testData = [
      { id: 1, name: 'Item 1', active: true },
      { id: 2, name: 'Item 2', active: false },
      { id: 3, name: 'Item 3', active: true },
    ];

    // Validate array with Zod
    const validatedArray = TestArraySchema.parse(testData);

    return ResponseHandler.success(
      res,
      validatedArray,
      'Array validation successful - Zod check passed'
    );
  })
);

/**
 * POST /api/v1/health/test-error
 * Intentionally triggers validation error
 * Demonstrates: 400 error on invalid input
 */
router.post(
  '/test-error',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  catchAsync(async (req: Request, res: Response) => {
    // This will always throw 400 error
    throw new AppError('Invalid input provided', 400, 'VALIDATION_ERROR');
  })
);

export default router;
