import { getProviderData } from '@flags-sdk/posthog'
import { createFlagsDiscoveryEndpoint } from 'flags/next'
import { env } from '@/lib/env'

export const GET = createFlagsDiscoveryEndpoint(() =>
  getProviderData({
    personalApiKey: env.POSTHOG_PERSONAL_API_KEY,
    projectId: env.NEXT_PUBLIC_POSTHOG_PROJECT_ID,
  }),
)
