#!/usr/bin/env node
/**
 * Post-generation script to add @ts-nocheck to generated Prisma files
 * This prevents TypeScript errors in generated files
 */

import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const generatedZodFile = join(__dirname, '../src/generated/zod/index.ts');

try {
  const content = readFileSync(generatedZodFile, 'utf-8');

  // Check if @ts-nocheck is already present
  if (content.includes('@ts-nocheck')) {
    console.log('✓ @ts-nocheck already present in generated file');
    process.exit(0);
  }

  // Add @ts-nocheck at the beginning of the file
  const updatedContent = `// @ts-nocheck - Generated file, ignore TypeScript errors\n${content}`;
  writeFileSync(generatedZodFile, updatedContent, 'utf-8');

  console.log('✓ Added @ts-nocheck to generated zod file');
} catch (error) {
  console.error('Error fixing generated file:', error);
  process.exit(1);
}
