import { z } from 'zod'

const envVariables = z.object({
  APPLE_MUSIC_PRIVATE_KEY: z.string(),
  APPLE_TEAM_ID: z.string(),
  APPLE_MUSIC_KEY_ID: z.string(),
  APPLE_MUSIC_USER_TOKEN: z.string(),
  NEXT_PUBLIC_VERCEL_URL: z.string(),
})

envVariables.parse(process.env)

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof envVariables> {}
  }

  namespace MusicKit {
    interface AppConfiguration {
      suppressErrorDialog?: boolean
      debug?: boolean
    }
  }
}
