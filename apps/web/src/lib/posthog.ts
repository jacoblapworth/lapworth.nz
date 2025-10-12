'use server'

import { PostHog } from 'posthog-node'

export default async function PostHogClient() {
  const posthogClient = new PostHog(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
    flushAt: 1,

    flushInterval: 0,
    host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
  })
  posthogClient.debug(true)
  return posthogClient
}
