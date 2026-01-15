import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';
import * as schema from './schema';
import 'dotenv/config'

const DATABASE_URL = process.env.DATABASE_URL;
const DATABASE_AUTH_TOKEN = process.env.DATABASE_AUTH_TOKEN;
const Prod = process.env.NODE_ENV === 'production';
if (!DATABASE_URL) { throw new Error('DATABASE_URL is not set'); }

// In production (not dev), we strictly require the auth token for LibSQL/Turso
if (Prod && !DATABASE_AUTH_TOKEN) { throw new Error('DATABASE_AUTH_TOKEN is not set'); }

const client = createClient({ url: DATABASE_URL, authToken: DATABASE_AUTH_TOKEN });

export const db = drizzle(client, { schema });
