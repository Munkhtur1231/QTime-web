import path from 'path';
import dotenv from 'dotenv';

const rootEnvPath = path.resolve(__dirname, '../../../.env');

// Load env from repo root first, then allow an apps/api/.env override if present.
dotenv.config({ path: rootEnvPath });
dotenv.config();
