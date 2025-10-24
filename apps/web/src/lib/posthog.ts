'use server'

import { PostHog } from 'posthog-node'
import { env } from '@/lib/env'

export default async function PostHogClient() {
  const client = new PostHog(env.NEXT_PUBLIC_POSTHOG_KEY, {
    flushAt: 1,
    flushInterval: 0,
    host: env.NEXT_PUBLIC_POSTHOG_HOST,
  })

  client.debug(process.env.NODE_ENV !== 'production')

  if (process.env.CI) {
    client.disable()
  }

  return client
}
