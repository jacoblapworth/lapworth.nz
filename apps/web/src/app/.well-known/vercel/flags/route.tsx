import { getProviderData } from '@flags-sdk/posthog'
import { createFlagsDiscoveryEndpoint } from 'flags/next'

export const GET = createFlagsDiscoveryEndpoint(() =>
  getProviderData({
    personalApiKey: process.env.POSTHOG_PERSONAL_API_KEY,
    projectId: process.env.NEXT_PUBLIC_POSTHOG_PROJECT_ID,
  }),
)
