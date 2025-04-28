import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

export const env = createEnv({
    server: {
        CANONICAL_URL: z.preprocess(
            str => str ?? (process.env.NODE_ENV === "production"
                ? `https://${process.env.VERCEL_URL}`
                : `http://localhost:${process.env.PORT || 3000}`),
            z.string().url()
        ),
        POSTGRES_HOST: z.string().default("localhost"),
        POSTGRES_PORT: z.string().default("5432"),
        POSTGRES_USER: z.string(),
        POSTGRES_PASSWORD: z.string(),
        POSTGRES_DATABASE: z.string(),
        POSTGRES_SSL: z.string().default("false"),
        UMAMI_SCRIPT_URL: z.string().url().default("https://us.umami.is/script.js"),
        UMAMI_WEBSITE_ID: z.string().uuid().optional(),
        WEBRING_API_BASE: z.string().url().optional(),
        INVALIDATION_KEY: z.string().optional(),
    },
    client: {},
    experimental__runtimeEnv: {},
    skipValidation:
        !!process.env.CI || !!process.env.SKIP_ENV_VALIDATION || process.env.npm_lifecycle_event === "lint",
})
