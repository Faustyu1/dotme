import { drizzle } from "drizzle-orm/node-postgres"
import { Client } from "pg"
import * as schema from "@/data/db/schema"
import { env } from "@/env.mjs"

const client = new Client({
    connectionString: `postgresql://${env.POSTGRES_USER}:${env.POSTGRES_PASSWORD}@${env.POSTGRES_HOST}:${env.POSTGRES_PORT}/${env.POSTGRES_DATABASE}?sslmode=disable`
});

client.connect();

export const db = drizzle(client, { schema });
