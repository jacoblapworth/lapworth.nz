'use client'

import { useEffect } from 'react'

import * as Sentry from '@sentry/nextjs'

import { Alert } from '@/components/Alert'

export default function ErrorPage({
  error,
}: {
  error: Error & { digest?: string }
}) {
  useEffect(() => {
    Sentry.captureException(error)
  }, [error])

  return <Alert sentiment="negative">Something went wrong!</Alert>
}
