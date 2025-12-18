import baseConfig from '../../eslint.config.mjs';

export default [
  ...baseConfig,
  {
    files: ['**/*.json'],
    rules: {
      '@nx/dependency-checks': [
        'error',
        {
          ignoredFiles: ['{projectRoot}/eslint.config.{js,cjs,mjs,ts,cts,mts}'],
        },
      ],
    },
    languageOptions: {
      parser: await import('jsonc-eslint-parser'),
    },
  },
  {
    ignores: [
      '**/out-tsc',
      '**/generated/**',
      'src/generated/**',
      '**/@prisma/**',
      '**/node_modules/**',
      '**/dist/**',
    ],
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    rules: {
      // Disable module boundaries rule for database library due to Prisma client resolution issues
      '@nx/enforce-module-boundaries': 'off',
    },
  },
];
