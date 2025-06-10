'use client'

import { useEffect } from 'react'

import ErrorComponent from 'next/error'

import * as Sentry from '@sentry/nextjs'

export default function GlobalError({
  error,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    Sentry.captureException(error)
  }, [error])

  return (
    <html>
      <body>
        <ErrorComponent statusCode={500} />
      </body>
    </html>
  )
}
