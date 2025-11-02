'use client'

import ErrorComponent from 'next/error'
import { useEffect } from 'react'
import { captureException } from '@/lib/error'

export default function GlobalError({
  error,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    captureException(error)
  }, [error])

  return (
    <html lang="en">
      <body>
        <ErrorComponent statusCode={500} />
      </body>
    </html>
  )
}
