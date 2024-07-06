import { z } from 'zod'

const EnvSchema = z.object({
  APPLE_MUSIC_PRIVATE_KEY: z.string(),
  APPLE_TEAM_ID: z.string(),
  APPLE_MUSIC_KEY_ID: z.string(),
  APPLE_MUSIC_USER_TOKEN: z.string(),
  KLAVIYO_API_KEY: z.string(),
  NEXT_PUBLIC_VERCEL_URL: z.string(),
  NEXT_PUBLIC_VERCEL_ENV: z.enum([
    'production',
    'preview',
    'development',
  ] as const),
  NEXT_PUBLIC_PRODUCTION_URL: z.string(),
  NEXT_PUBLIC_SENTRY_DSN: z.string(),
  NEXT_PUBLIC_SANITY_API_VERSION: z.string(),
  NEXT_PUBLIC_SANITY_DATASET: z.string(),
  NEXT_PUBLIC_SANITY_PROJECT_ID: z.string(),
})

EnvSchema.parse(process.env)

declare global {
  namespace NodeJS {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface ProcessEnv extends z.infer<typeof EnvSchema> {}
  }

  namespace MusicKit {
    interface AppConfiguration {
      suppressErrorDialog?: boolean
      debug?: boolean
    }
  }
}
