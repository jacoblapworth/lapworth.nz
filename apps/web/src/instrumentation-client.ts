import posthog from 'posthog-js'
import { env } from '@/lib/env'

function init() {
  if (process.env.NODE_ENV !== 'production') {
    return
  }

  if (process.env.CI) {
    return
  }

  posthog.init(env.NEXT_PUBLIC_POSTHOG_KEY, {
    api_host: env.NEXT_PUBLIC_POSTHOG_API_HOST,
    defaults: '2025-05-24',
    ui_host: env.NEXT_PUBLIC_POSTHOG_HOST,
  })
}

init()
