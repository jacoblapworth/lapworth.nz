import { postHogAdapter } from '@flags-sdk/posthog'
import { flag } from 'flags/next'

export const devmode = flag({
  adapter: postHogAdapter.isFeatureEnabled(),
  description: 'Enable devmode features',
  key: 'devmode',
})

export const showWork = flag({
  adapter: postHogAdapter.isFeatureEnabled(),
  key: 'enable-work',
})

export const enableFood = flag({
  adapter: postHogAdapter.isFeatureEnabled(),
  key: 'enable-food',
})
