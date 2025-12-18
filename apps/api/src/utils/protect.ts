import jwt, { JwtPayload } from "jsonwebtoken";
import { Request, Response, NextFunction, RequestHandler } from "express";
import { catchAsync } from "./catchAsync";
import { AppError } from "./AppError";

// Extend Express Request type to include user properties
export interface AuthenticatedRequest extends Request {
  userId: number;
  userRole: string;
  email?: string | null;
}

// JWT payload interface
interface JWTPayload extends JwtPayload {
  id: string;
  role: string;
  email: string;
}

export const protect: RequestHandler = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    let token: string | undefined;

    if (req.headers.authorization) {
      token = req.headers.authorization.split(" ")[1];
    }

    if (!token) {
      throw new AppError("TOKEN оруулна уу", 401);
    }

    try {
      if (!process.env.JWT_SECRET) {
        throw new AppError("JWT_SECRET is not defined", 500);
      }

      const decoded = jwt.verify(token, process.env.JWT_SECRET) as JWTPayload;
      // console.log("decoded", decoded);
      // Add user info to request object for next middleware
      (req as AuthenticatedRequest).userId = Number(decoded.id);
      (req as AuthenticatedRequest).userRole = decoded.role;
      (req as AuthenticatedRequest).email = decoded.email;

      next();
    } catch (err: unknown) {
      if (err instanceof Error && err.name === "TokenExpiredError") {
        throw new AppError("TOKEN expired", 401);
      }
      throw new AppError("Invalid TOKEN", 401);
    }
  }
);

export const passAuth: RequestHandler = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    let token: string | undefined;

    if (req.headers.authorization) {
      token = req.headers.authorization.split(" ")[1];
    }

    if (!token) {
      (req as AuthenticatedRequest).userId = 0;
      (req as AuthenticatedRequest).userRole = "";
      (req as AuthenticatedRequest).email = "";
      return next();
    }

    try {
      if (!process.env.JWT_SECRET) {
        throw new AppError("JWT_SECRET is not defined", 500);
      }

      const decoded = jwt.verify(token, process.env.JWT_SECRET) as JWTPayload;

      // Add user info to request object for next middleware
      (req as AuthenticatedRequest).userId = Number(decoded.id);
      (req as AuthenticatedRequest).userRole = decoded.role;
      (req as AuthenticatedRequest).email = decoded.email;

      next();
    } catch (err: unknown) {
      if (err instanceof Error && err.name === "TokenExpiredError") {
        throw new AppError("TOKEN expired", 401);
      }
      throw new AppError("Invalid TOKEN", 401);
    }
  }
);

export const authorize = (roles: string[]): RequestHandler => {
  return (req: Request, res: Response, next: NextFunction) => {
    const authReq = req as AuthenticatedRequest;
    if (!authReq.userRole || !roles.includes(authReq.userRole)) {
      throw new AppError(
        `Your [${
          authReq.userRole || "unknown"
        }] permission has been denied to do this action`,
        403
      );
    }
    next();
  };
};
