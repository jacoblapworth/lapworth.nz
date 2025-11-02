'use cache'

import { cacheLife } from 'next/cache'
import { Text } from '@/components/text'

export default async function Page() {
  cacheLife('max')
  return (
    <Text as="h1" display size="lg">
      Please check your email.
    </Text>
  )
}
