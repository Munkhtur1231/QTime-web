# Business Directory API

A production-ready RESTful API built with Express.js, TypeScript, Prisma, and following SOLID principles.

## Features

✨ **Core Features**

- 🔐 JWT Authentication & Authorization
- ✅ Request Validation with Zod
- 📊 Dynamic Pagination, Filtering & Sorting
- 🛡️ Security with Helmet & CORS
- 📝 Comprehensive Logging with Winston
- 🎯 Error Handling with Custom Error Classes
- 🏗️ SOLID Principles & Clean Architecture
- 🔄 Database Seeding Helpers

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Language**: TypeScript
- **Database ORM**: Prisma
- **Validation**: Zod
- **Authentication**: JWT (jsonwebtoken)
- **Password Hashing**: bcryptjs
- **Logging**: Winston + Morgan
- **Security**: Helmet, CORS

## Project Structure

```
apps/api/
├── src/
│   ├── controllers/       # Request handlers
│   │   ├── base.controller.ts
│   │   ├── user.controller.ts
│   │   ├── business-category.controller.ts
│   │   ├── business.controller.ts
│   │   ├── business-address.controller.ts
│   │   └── review.controller.ts
│   │
│   ├── services/          # Business logic
│   │   ├── base.service.ts
│   │   ├── user.service.ts
│   │   ├── business-category.service.ts
│   │   ├── business.service.ts
│   │   ├── business-address.service.ts
│   │   └── review.service.ts
│   │
│   ├── routes/            # Route definitions
│   │   ├── base.route.ts
│   │   ├── user.route.ts
│   │   ├── business-category.route.ts
│   │   ├── business.route.ts
│   │   ├── business-address.route.ts
│   │   └── review.route.ts
│   │
│   ├── middlewares/       # Custom middlewares
│   │   ├── errorHandler.ts
│   │   ├── loggerMiddleware.ts
│   │   └── validate.ts
│   │
│   ├── validation/        # Zod schemas
│   │   ├── user.schema.ts
│   │   ├── business-category.schema.ts
│   │   ├── business.schema.ts
│   │   ├── business-address.schema.ts
│   │   └── review.schema.ts
│   │
│   ├── utils/             # Utility functions
│   │   ├── AppError.ts
│   │   ├── catchAsync.ts
│   │   ├── response.ts
│   │   ├── pagination.ts
│   │   ├── prisma.ts
│   │   ├── protect.ts
│   │   ├── logger.ts
│   │   ├── gracefulShutdown.ts
│   │   └── random.ts
│   │
│   ├── helpers/           # Helper scripts
│   │   └── seed.ts
│   │
│   ├── app.ts            # Express app setup
│   └── main.ts           # Application entry point
│
├── routes/
│   └── index.ts          # Main router
│
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 18+
- MySQL Database
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies (from workspace root):

```bash
npm install
```

3. Set up environment variables in `.env`:

```env
DATABASE_URL="mysql://user:password@localhost:3306/database_name"
JWT_SECRET="your-secret-key"
PORT=3333
NODE_ENV=development
```

4. Push database schema:

```bash
npx nx run @businessdirectory/database:prisma:push
```

5. Seed the database:

```bash
npm run db:seed
```

### Running the API

**Development Mode:**

```bash
npx nx serve @businessdirectory/api
```

**Build for Production:**

```bash
npx nx build @businessdirectory/api
```

**Run Linting:**

```bash
npx nx lint @businessdirectory/api
```

## API Endpoints

### Authentication

| Method | Endpoint                 | Description       | Auth Required |
| ------ | ------------------------ | ----------------- | ------------- |
| POST   | `/api/v1/users/register` | Register new user | No            |
| POST   | `/api/v1/users/login`    | Login user        | No            |

### Users

| Method | Endpoint            | Description    | Auth Required    |
| ------ | ------------------- | -------------- | ---------------- |
| GET    | `/api/v1/users`     | Get all users  | Admin/SuperAdmin |
| GET    | `/api/v1/users/:id` | Get user by ID | Yes              |
| PUT    | `/api/v1/users/:id` | Update user    | Yes              |
| DELETE | `/api/v1/users/:id` | Delete user    | SuperAdmin       |

### Business Categories

| Method | Endpoint                          | Description        | Auth Required |
| ------ | --------------------------------- | ------------------ | ------------- |
| GET    | `/api/v1/business-categories`     | Get all categories | No            |
| GET    | `/api/v1/business-categories/:id` | Get category by ID | No            |
| POST   | `/api/v1/business-categories`     | Create category    | No            |
| PUT    | `/api/v1/business-categories/:id` | Update category    | No            |
| DELETE | `/api/v1/business-categories/:id` | Delete category    | No            |

### Businesses

| Method | Endpoint                 | Description        | Auth Required |
| ------ | ------------------------ | ------------------ | ------------- |
| GET    | `/api/v1/businesses`     | Get all businesses | No            |
| GET    | `/api/v1/businesses/:id` | Get business by ID | No            |
| POST   | `/api/v1/businesses`     | Create business    | No            |
| PUT    | `/api/v1/businesses/:id` | Update business    | No            |
| DELETE | `/api/v1/businesses/:id` | Delete business    | No            |

### Business Addresses

| Method | Endpoint                         | Description       | Auth Required |
| ------ | -------------------------------- | ----------------- | ------------- |
| GET    | `/api/v1/business-addresses`     | Get all addresses | No            |
| GET    | `/api/v1/business-addresses/:id` | Get address by ID | No            |
| POST   | `/api/v1/business-addresses`     | Create address    | No            |
| PUT    | `/api/v1/business-addresses/:id` | Update address    | No            |
| DELETE | `/api/v1/business-addresses/:id` | Delete address    | No            |

### Reviews

| Method | Endpoint              | Description      | Auth Required   |
| ------ | --------------------- | ---------------- | --------------- |
| GET    | `/api/v1/reviews`     | Get all reviews  | No              |
| GET    | `/api/v1/reviews/:id` | Get review by ID | No              |
| POST   | `/api/v1/reviews`     | Create review    | Yes             |
| PUT    | `/api/v1/reviews/:id` | Update review    | Yes (Own)       |
| DELETE | `/api/v1/reviews/:id` | Delete review    | Yes (Own/Admin) |

## Query Parameters

### Pagination

```
GET /api/v1/businesses?page=1&limit=10
```

### Sorting

```
GET /api/v1/businesses?sortBy=name&sortOrder=asc
```

### Filtering

```
GET /api/v1/businesses?categoryId=1&isActive=true
```

### Search

```
GET /api/v1/businesses?search=restaurant
```

### Combined

```
GET /api/v1/businesses?page=1&limit=10&sortBy=createdAt&sortOrder=desc&categoryId=1&search=food
```

## Response Format

### Success Response

```json
{
  "success": true,
  "message": "Success message",
  "data": { ... }
}
```

### Paginated Response

```json
{
  "success": true,
  "message": "Success message",
  "data": [ ... ],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 100,
    "totalPages": 10
  }
}
```

### Error Response

```json
{
  "success": false,
  "statusCode": 400,
  "code": "ERROR_CODE",
  "message": "Error message",
  "stack": "..." // only in development
}
```

## Authentication

The API uses JWT tokens for authentication. Include the token in the Authorization header:

```
Authorization: Bearer <your-token>
```

### User Roles

- **USER**: Regular users (can create reviews, update own profile)
- **ADMIN**: Administrators (can manage all resources except delete users)
- **SUPERADMIN**: Super administrators (full access)

## Database Seeding

The API includes a comprehensive seed script:

```bash
# Seed database
npm run db:seed

# Reset database and seed
npm run db:reset
```

**Default Credentials:**

- Super Admin: `superadmin@business.mn` / `password123`
- Admin: `admin@business.mn` / `password123`
- User: `user1@example.com` / `password123`

## Architecture Patterns

### SOLID Principles

1. **Single Responsibility**: Each class has one responsibility
2. **Open/Closed**: Extensible via inheritance (Base classes)
3. **Liskov Substitution**: Child classes are substitutable
4. **Interface Segregation**: Specific interfaces for each service
5. **Dependency Inversion**: Depend on abstractions, not concretions

### Design Patterns

- **Repository Pattern**: Data access abstraction
- **Service Layer Pattern**: Business logic separation
- **Dependency Injection**: Loose coupling
- **Singleton Pattern**: Prisma client instance

## Error Handling

The API uses a centralized error handling system:

```typescript
// Throw custom errors
throw new AppError('Message', 404, 'NOT_FOUND');

// Async error handling
catchAsync(async (req, res) => {
  // Your code here
});
```

## Logging

Logs are stored in the `logs/` directory:

- `YYYY-MM-DD_combined.log`: All logs
- `YYYY-MM-DD_error.log`: Error logs only

## Security Features

- 🔒 JWT Authentication
- 🛡️ Helmet.js security headers
- 🌐 CORS configuration
- 🔐 Password hashing with bcrypt
- ✅ Input validation with Zod
- 🚫 SQL injection prevention (Prisma)

## License

MIT
