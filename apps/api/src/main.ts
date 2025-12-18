/**
 * Business Directory API
 * Production-ready Express.js API with authentication, validation, and CRUD operations
 */

import dotenv from 'dotenv';
import { createApp } from './app';
import { logger } from './utils/logger';
import { gracefulShutdown } from './utils/gracefulShutdown';
import PrismaService from './utils/prisma';

// Load environment variables
dotenv.config();

const app = createApp();

const port = process.env.BACKEND_PORT || 3333;
const server = app.listen(port, () => {
  logger.info(`🚀 Server is running on http://localhost:${port}`);
  logger.info(`📚 API Documentation: http://localhost:${port}/api/v1`);
  logger.info(`🏥 Health Check: http://localhost:${port}/api/v1/health`);
  console.log(`\n🚀 Server is running on http://localhost:${port}`);
  console.log(`📚 API Endpoints: http://localhost:${port}/api/v1`);
  console.log(`🏥 Health Check: http://localhost:${port}/api/v1/health\n`);
});

server.on('error', (error) => {
  logger.error('Server error:', error);
  console.error('❌ Server error:', error);
});

// Graceful shutdown
gracefulShutdown(server);

// Disconnect Prisma on shutdown
process.on('SIGTERM', async () => {
  logger.info('SIGTERM received, disconnecting Prisma...');
  await PrismaService.disconnect();
});

process.on('SIGINT', async () => {
  logger.info('SIGINT received, disconnecting Prisma...');
  await PrismaService.disconnect();
});
