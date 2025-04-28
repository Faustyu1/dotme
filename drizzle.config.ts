import type { Config } from "drizzle-kit"
import { env } from "@/env.mjs"

export default {
    schema: "./src/data/db/schema.ts",
    out: "./drizzle",
		dialect: "postgresql",
    dbCredentials: {
        host: env.POSTGRES_HOST,
        port: parseInt(env.POSTGRES_PORT),
        user: env.POSTGRES_USER,
        password: env.POSTGRES_PASSWORD,
        database: env.POSTGRES_DATABASE,
				ssl: false
    },
    verbose: true,
    strict: true,
    baseURL: "http://localhost:4983"
} satisfies Config
