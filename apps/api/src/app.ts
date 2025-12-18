import express, { Application } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import * as path from 'path';
import passport from 'passport';
import routes from './routes';
import { errorHandler } from './middlewares/errorHandler';
import morganMiddleware from './middlewares/loggerMiddleware';
import { AppError } from './utils/AppError';

export function createApp(): Application {
  const app = express();

  // Security middleware - Enhanced helmet configuration
  app.use(
    helmet({
      contentSecurityPolicy: {
        directives: {
          defaultSrc: ["'self'"],
          styleSrc: ["'self'", "'unsafe-inline'"],
        },
      },
      crossOriginEmbedderPolicy: false,
      crossOriginResourcePolicy: { policy: 'cross-origin' },
    })
  );

  // CORS configuration - Enhanced with security best practices
  app.use(
    cors({
      origin: process.env.CORS_ORIGIN || '*',
      credentials: true,
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
      allowedHeaders: ['Content-Type', 'Authorization'],
      exposedHeaders: ['Content-Length', 'X-Request-Id'],
      maxAge: 600, // Cache preflight requests for 10 minutes
    })
  );

  // Additional security headers
  app.use((req, res, next) => {
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Frame-Options', 'DENY');
    res.setHeader('X-XSS-Protection', '1; mode=block');
    res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
    next();
  });

  // Body parsers
  app.use(express.json({ limit: '10mb' }));
  app.use(express.urlencoded({ extended: true, limit: '10mb' }));

  // Initialize Passport
  app.use(passport.initialize());

  // Logging
  app.use(morganMiddleware);

  // Static files
  app.use('/assets', express.static(path.join(__dirname, 'assets')));

  // API routes
  app.use('/api/v1', routes);

  // Root route
  app.get('/', (req, res) => {
    res.json({
      message: 'Welcome to Business Directory API',
      version: '1.0.0',
      endpoints: {
        health: '/api/v1/health',
        users: '/api/v1/users',
        businessCategories: '/api/v1/business-categories',
        businesses: '/api/v1/businesses',
        businessAddresses: '/api/v1/business-addresses',
        reviews: '/api/v1/reviews',
      },
    });
  });

  // 404 handler
  app.all('*', (req, res, next) => {
    next(new AppError(`Route ${req.originalUrl} not found`, 404, 'NOT_FOUND'));
  });

  // Global error handler
  app.use(errorHandler);

  return app;
}
