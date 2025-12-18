#!/usr/bin/env node
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const zodIndexPath = join(__dirname, '../src/generated/zod/index.ts');

try {
  // Check if file exists
  if (!existsSync(zodIndexPath)) {
    console.log('ℹ️  Generated zod file does not exist yet, skipping fix');
    process.exit(0);
  }

  let content = readFileSync(zodIndexPath, 'utf-8');
  const originalContent = content;

  // Remove the unused Prisma import line - multiple regex patterns to catch variations
  const patterns = [
    /^import type \{ Prisma \} from '@prisma\/client';\s*\n/gm,
    /^import type \{ Prisma \} from "@prisma\/client";\s*\n/gm,
    /^import \{ Prisma \} from '@prisma\/client';\s*\n/gm,
    /^import \{ Prisma \} from "@prisma\/client";\s*\n/gm,
  ];

  let wasFixed = false;
  for (const pattern of patterns) {
    if (pattern.test(content)) {
      content = content.replace(pattern, '');
      wasFixed = true;
    }
  }

  if (wasFixed && content !== originalContent) {
    writeFileSync(zodIndexPath, content, 'utf-8');
    console.log('✅ Removed unused Prisma import from generated zod file');
    process.exit(0);
  } else {
    console.log(
      'ℹ️  No unused Prisma import found (already fixed or not present)'
    );
    process.exit(0);
  }
} catch (error) {
  console.error('❌ Error fixing generated zod file:', error);
  process.exit(1);
}
