'use client'

import { OctagonAlertIcon } from 'lucide-react'
import { useEffect } from 'react'
import { Text } from '@/components/text'
import { captureException } from '@/lib/error'
import { HStack } from '@/styled/jsx'

export default function ErrorPage({
  error,
}: {
  error: Error & { digest?: string }
}) {
  useEffect(() => {
    captureException(error)
  }, [error])

  return (
    <HStack>
      <OctagonAlertIcon size={32} />
      <Text as="h1" size="lg">
        Something went wrong!
      </Text>
    </HStack>
  )
}
