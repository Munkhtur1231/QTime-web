import { Request, Response, NextFunction, RequestHandler } from 'express';

/**
 * Catch async errors and pass them to Express error handler
 */
export const catchAsync = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  fn: (req: Request, res: Response, next: NextFunction) => Promise<any>
): RequestHandler => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
};

/**
 * Type-safe version for authenticated routes
 */
export const catchAsyncAuth = <T extends Request = Request>(
  fn: (req: T, res: Response, next: NextFunction) => Promise<void>
): RequestHandler => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req as T, res, next)).catch(next);
  };
};
