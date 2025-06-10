import { Metadata } from 'next'

import { PillLink } from '@/src/components/Button'
import { Text } from '@/src/components/Typography'

export const metadata: Metadata = {
  title: '404',
}

export default function Page() {
  return (
    <>
      <Text as="h1" display size="xlarge">
        404
      </Text>
      <p>
        This page doesn’t exist. Try heading back home to start from the
        beginning.
      </p>
      <PillLink href="/">Back to home</PillLink>
    </>
  )
}
