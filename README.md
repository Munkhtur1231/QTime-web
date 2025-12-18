
## Architecture
### Monorepo Structure
```
businessdirectory/
├── apps/
│   ├── api/          # Express.js REST API (SOLID principles)
│   └── web/          # Next.js frontend (SSG, SSR, ISR, CSR)
├── libs/
│   └── database/     # Shared Prisma client & Zod schemas
└── package.json      # Workspace root
```

## Quick Start


## Available Scripts

```bash
# Development
npm run dev:api              # Run API in development mode
npx nx dev web             # Run Next.js app

# Database
npm run db:seed              # Seed database
npm run db:reset             # Reset and seed database
npx nx run @businessdirectory/database:prisma:generate #This generates new shared types for front/back
npx nx run @businessdirectory/database:prisma:push  #Applies changes to DB

# Build
npx nx build api             # Build API
npx nx build web             # Build Next.js app
npx nx build database        # Build database library

# Lint & Type Check
npx nx lint api              # Lint API
npx nx lint web              # Lint Next.js app
npx tsc --build              # TypeScript check all projects
npx nx run-many -t lint test build typecheck #Final lint check

```

### Prerequisites

- At least Node.js 20.16.0!!
- MySQL database
- Git

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd businessdirectory

# Install dependencies
npm install

# Configure environment variables
cp .env.example .env
# Edit .env with your database credentials
```

### Environment Variables

Create a `.env` file in the root directory:

### Database Setup

```bash
# Push schema to database
npx nx run @businessdirectory/database:prisma:generate
npx nx run @businessdirectory/database:prisma:push

# Seed database with sample data
npm run db:seed

```

### Development

```bash
# Run API server
npm run dev:api

# Run Next.js frontend
nx dev web

```

The API will be available at `http://localhost:3333` and the web app at `http://localhost:3000`.

## Shared Libraries

### `@businessdirectory/database`

A shared library that provides:

- **Prisma Client**: Database access layer
- **Zod Schemas**: Type-safe validation schemas for all models
- **TypeScript Types**: Generated types from Prisma schema

Both the API and Web applications import from this library to ensure consistency:

```typescript
import { prisma, CreateUserSchema, UpdateUserSchema } from '@businessdirectory/database';
```

This approach ensures:

- **Single source of truth** for database schema and validation
- **Type safety** across frontend and backend
- **Code reusability** and maintainability

## API Architecture (SOLID Principles)

The API follows SOLID principles with a layered architecture:

```
src/
├── routes/          # Route definitions
├── controllers/     # Request/response handling
├── services/        # Business logic
├── middleware/      # Authentication, validation, error handling
├── utils/           # Helper functions
└── helpers/         # Database seeding, etc.
```


## 🔒 Authentication

The API uses JWT tokens for authentication. Protected routes require a valid token in the Authorization header:

```
Authorization: Bearer <your-jwt-token>
```

Role-based permissions:

- **ADMIN**: Full access to all resources
- **BUSINESS_OWNER**: Manage own businesses and reviews
- **USER**: Create reviews, manage own profile

## 📚 API Documentation

API endpoints are organized by resource:

- `/api/users` - User management
- `/api/business-parent-categories` - Parent categories
- `/api/business-categories` - Business categories
- `/api/businesses` - Business listings
- `/api/business-addresses` - Business locations
- `/api/reviews` - Business reviews
