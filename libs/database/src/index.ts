// Export Prisma Client from the actual generated location
export * from '@prisma/client';

// Export Zod schemas under a namespace to avoid conflicts
export * as zodSchemas from './generated/zod/index.js';

// Export custom validation schemas (shared between web and API)
export * from './schemas/index.js';

// Export a singleton instance for the API
export { prisma } from './lib/prisma.js';

// Export extended types
export * from './extended/index.js';
