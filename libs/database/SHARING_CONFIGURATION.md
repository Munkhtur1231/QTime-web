# Database Library - Sharing Configuration

## Overview

The `@businessdirectory/database` library is configured to be shared between the `web` and `api` projects in this Nx monorepo. It provides:

1. **Prisma Client** - Database ORM
2. **Zod Schemas** - Type-safe validation schemas
3. **Singleton Prisma Instance** - Shared database connection

## Configuration

### TypeScript Configuration

The library uses the **base tsconfig settings** from `tsconfig.base.json`:

- `module: "esnext"`
- `moduleResolution: "bundler"`

This configuration is optimal for libraries that will be consumed by other projects because:

- ✅ Works with both ESM and CommonJS consumers
- ✅ No need for `.js` extensions in imports
- ✅ Compatible with modern bundlers (Webpack, Vite, etc.)
- ✅ Simpler import paths

### Package.json Configuration

```json
{
  "type": "module",
  "main": "./dist/index.js",
  "types": "./dist/index.d.ts",
  "exports": {
    ".": {
      "@businessdirectory/source": "./src/index.ts",
      "types": "./dist/index.d.ts",
      "import": "./dist/index.js",
      "default": "./dist/index.js"
    }
  }
}
```

**Key Points:**

- `"type": "module"` - Declares this as an ES module
- `exports` field - Modern Node.js package exports
- `@businessdirectory/source` - Nx-specific for development (uses source files)
- Dual entry points for TypeScript types and JavaScript

## How to Use in Projects

### In API (Express/Node.js)

```typescript
// Import Prisma types and client
import { PrismaClient, User, Business } from '@businessdirectory/database';

// Import Zod schemas
import { zodSchemas } from '@businessdirectory/database';

// Import singleton instance
import { prisma } from '@businessdirectory/database';

// Use singleton instance (recommended)
const users = await prisma.user.findMany();

// Use Zod schemas for validation
const UserSchema = zodSchemas.UserSchema;
const validatedData = UserSchema.parse(data);
```

### In Web (Next.js/React)

```typescript
// Import types only (for type safety)
import type { User, Business } from '@businessdirectory/database';

// Import Zod schemas for client-side validation
import { zodSchemas } from '@businessdirectory/database';

// Use in forms/validation
const { UserSchema } = zodSchemas;
const result = UserSchema.safeParse(formData);
```

## Why This Configuration?

### ✅ Advantages

1. **Single Source of Truth**

   - Database schema defined once in Prisma
   - Zod schemas generated from Prisma schema
   - Types automatically synced

2. **Type Safety Across Projects**

   - Both web and api use same types
   - No type mismatches between frontend and backend
   - Auto-completion in both projects

3. **Validation Consistency**

   - Same Zod schemas for API validation
   - Same Zod schemas for frontend validation
   - Consistent validation rules

4. **Nx Monorepo Benefits**
   - Automatic dependency tracking
   - Build caching
   - Affected command optimization

### 🔧 Module Resolution Explained

**Previous Configuration (nodenext):**

```typescript
// Required .js extensions
import { prisma } from './lib/prisma.js';
```

- ❌ More verbose
- ❌ Confusing for TypeScript files
- ✅ Strict ESM compliance

**Current Configuration (bundler):**

```typescript
// Clean imports
import { prisma } from './lib/prisma';
```

- ✅ Cleaner syntax
- ✅ Works with bundlers
- ✅ Better for libraries

## File Structure

```
libs/database/
├── src/
│   ├── index.ts              # Main exports
│   ├── lib/
│   │   ├── prisma.ts         # Singleton instance
│   │   └── database.ts       # Utility functions
│   └── generated/
│       ├── client/           # Prisma Client (auto-generated)
│       └── zod/              # Zod schemas (auto-generated)
│
├── prisma/
│   └── schema.prisma         # Database schema
│
├── package.json              # Library configuration
├── tsconfig.json             # TypeScript config
└── tsconfig.lib.json         # Build configuration
```

## Best Practices

### 1. **Use the Singleton Instance**

```typescript
// ✅ Good - Use singleton
import { prisma } from '@businessdirectory/database';

// ❌ Bad - Create new instances
const prisma = new PrismaClient();
```

### 2. **Import Types Separately in Frontend**

```typescript
// ✅ Good - Type-only import
import type { User } from '@businessdirectory/database';

// ❌ Avoid - Runtime import in frontend
import { PrismaClient } from '@businessdirectory/database';
```

### 3. **Use Zod Schemas for Validation**

```typescript
// ✅ Good - Use generated schemas
import { zodSchemas } from '@businessdirectory/database';
const { UserSchema } = zodSchemas;

// ❌ Bad - Duplicate validation logic
const userSchema = z.object({ ... });
```

### 4. **Keep Schema in Sync**

After modifying `schema.prisma`:

```bash
# Regenerate client and schemas
npx nx run @businessdirectory/database:prisma:generate

# Or push to database
npx nx run @businessdirectory/database:prisma:push
```

## Troubleshooting

### Build Errors

**Error: "Module not found"**

```bash
# Rebuild the database library
npx nx build @businessdirectory/database
```

**Error: "Cannot find module '@businessdirectory/database'"**

- Check `tsconfig.base.json` has correct path mapping
- Ensure library is built: `npx nx build @businessdirectory/database`

### Type Errors

**Error: "Type 'X' is not assignable"**

- Regenerate Prisma client: `npx nx run @businessdirectory/database:prisma:generate`
- Restart TypeScript server in your IDE

### Import Errors

**Error: "Relative import paths need explicit file extensions"**

- Check `tsconfig.lib.json` uses `moduleResolution: "bundler"`
- Ensure no `"type": "module"` conflicts

## Summary

✅ **Current Configuration:**

- Module: `esnext` (inherited from base)
- Resolution: `bundler` (inherited from base)
- Clean imports (no `.js` extensions needed)
- Works for both web and api
- Optimal for Nx monorepo

✅ **Exports:**

- Prisma Client types and client
- Zod schemas (namespaced)
- Singleton instance

✅ **Usage:**

- API: Use singleton instance
- Web: Import types only
- Both: Use Zod schemas for validation
