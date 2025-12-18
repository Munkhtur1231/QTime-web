## Архитектур

### Бүтэц

```
businessdirectory/
├── apps/
│   ├── api/          # Express.js REST API (SOLID principles)
│   └── web/          # Next.js frontend (SSG, SSR, ISR, CSR)
├── libs/
│   └── database/     # Shared Prisma client & Zod schemas
└── package.json      # Workspace root
```

Бэлэн зүйлс/ Хийх зүйлс:

1. Бэкенд Суурь ERD: User, Business, Business Admin, Business Location, Reviews зэрэг байгаа. Энийг суурь болгоод Q-Time-ийн шаардлагыг шууд нэмвэл болчих байх. (Би postman collection teams-ээр явуулъя)
2. Database Seed- Business Location бол шууд л улаанбаатар дотор generate хийж байгаа. (Шинэ шаардлагын дагуу өөрчлөгдөх байх)
3. Front-end газрын зураг хэсэг - Би Газруудыг Maps-аар хардгаар нүүр хуудсан дээр тавьчихлаа. Шаардлагатай бол солиорой
4. Antd design суулгасан тул фронт дээр хуудсуудаа шууд хялбар байдлаар өрөөрэй.
5. Typesafety давж байгаа шүү. (prisma generate хийгээд typesafety давж байгаа.)

Датабааз: prisma.schema өөрчлөлт оруулбал дараах коммандыг дуудахаар автоматаар type нь шэйр хийгдэнэ шүү. schema-аас өөр газарт өөрчлөлт оруулах шаардлагагүй

### Хэрэгтэй зүйлс

- At least Node.js 20.16.0!! (Анхаараарай. Хуучин дээр ажиллахгүй)
- MySQL database
- Git

## Орчингоо бэлдэх

```bash

cp .env.example .env # Mysql-ийн баазын замаа шинэчлээрэй
npx nx run @businessdirectory/database:prisma:generate # Exports TS types, prisma clients Заавал хийх
npx nx run @businessdirectory/database:prisma:push # Өөрчлөлт орох DB.
npm run db:seed
```

```bash
# Хөгжүүлэлт
npm run dev:api              # Run API in development mode
npx nx dev web             # Run Next.js app

# Бааз
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

The API will be available at `http://localhost:3333` and the web app at `http://localhost:3000`.

### Анхаарах (Фронт, бэк)

import хийхдээ "@" ашиглахаар алдаа гараад байгаа шүү. Иймээс "../../.." илэрхийллийг ашиглаарай
харин баазын types-ийг импорт хийхдээ @ ашиглаж байгаа шүү

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
