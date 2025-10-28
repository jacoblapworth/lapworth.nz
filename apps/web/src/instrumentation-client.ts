import * as Sentry from '@sentry/nextjs'
import posthog from 'posthog-js'
import { env } from '@/lib/env'

function init() {
  if (process.env.NODE_ENV !== 'production') {
    return
  }

  posthog.init(env.NEXT_PUBLIC_POSTHOG_KEY, {
    api_host: env.NEXT_PUBLIC_POSTHOG_API_HOST,
    defaults: '2025-05-24',
    ui_host: env.NEXT_PUBLIC_POSTHOG_HOST,
  })

  Sentry.init({
    debug: false,
    dsn: env.NEXT_PUBLIC_SENTRY_DSN,
    tracesSampleRate: 1,
  })
}

init()

export const onRouterTransitionStart = Sentry.captureRouterTransitionStart
