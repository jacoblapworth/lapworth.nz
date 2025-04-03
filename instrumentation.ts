import * as Sentry from '@sentry/nextjs'

export function register() {
  Sentry.init({
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
    // Adjust this value in production, or use tracesSampler for greater control
    tracesSampleRate: 1,
    // Setting this option to true will print useful information to the console while you're setting up Sentry.
    debug: false,
    // uncomment the line below to enable Spotlight (https://spotlightjs.com)
    // spotlight: process.env.NODE_ENV === 'development',
    // integrations: (integrations) => {
    //   console.log(integrations)

    //   return [
    //     Sentry.requestDataIntegration(),
    //     // Sentry.replayIntegration({
    //     //   maskAllText: true,
    //     //   blockAllMedia: true,
    //     // }),
    //   ]
    // },
  })
}

export const onRequestError = Sentry.captureRequestError
