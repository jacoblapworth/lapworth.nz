import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod/v4'

export const env = createEnv({
  client: {
    NEXT_PUBLIC_POSTHOG_API_HOST: z.string(),
    NEXT_PUBLIC_POSTHOG_HOST: z.url(),
    NEXT_PUBLIC_POSTHOG_KEY: z.string(),
    NEXT_PUBLIC_POSTHOG_PROJECT_ID: z.string(),
    NEXT_PUBLIC_PRODUCTION_URL: z.string(),
  },
  experimental__runtimeEnv: {
    NEXT_PUBLIC_POSTHOG_API_HOST: process.env.NEXT_PUBLIC_POSTHOG_API_HOST,
    NEXT_PUBLIC_POSTHOG_HOST: process.env.NEXT_PUBLIC_POSTHOG_HOST,
    NEXT_PUBLIC_POSTHOG_KEY: process.env.NEXT_PUBLIC_POSTHOG_KEY,
    NEXT_PUBLIC_POSTHOG_PROJECT_ID: process.env.NEXT_PUBLIC_POSTHOG_PROJECT_ID,
    NEXT_PUBLIC_PRODUCTION_URL: process.env.NEXT_PUBLIC_PRODUCTION_URL,
  },
  server: {
    APPLE_MUSIC_KEY_ID: z.string(),
    APPLE_MUSIC_PRIVATE_KEY: z.string(),
    APPLE_MUSIC_USER_TOKEN: z.string(),
    APPLE_TEAM_ID: z.string(),
    BLOB_READ_WRITE_TOKEN: z.string(),
    KLAVIYO_API_KEY: z.string(),
    POSTHOG_PERSONAL_API_KEY: z.string(),
    RESEND_API_KEY: z.string(),
  },
})

declare global {
  namespace MusicKit {
    interface AppConfiguration {
      suppressErrorDialog?: boolean
      debug?: boolean
    }
  }
}
