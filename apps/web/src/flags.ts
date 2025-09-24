import { postHogAdapter } from '@flags-sdk/posthog'
import { flag } from 'flags/next'

function identify() {
  return {
    distinctId: 'anonymous',
  }
}

export const devmode = flag({
  adapter: postHogAdapter.isFeatureEnabled(),
  description: 'Enable devmode features',
  identify,
  key: 'devmode',
})

export const showWork = flag({
  adapter: postHogAdapter.isFeatureEnabled(),
  identify,
  key: 'enable-work',
})

export const enableFood = flag({
  adapter: postHogAdapter.isFeatureEnabled(),
  identify,
  key: 'enable-food',
})
