'use cache'

import type { Metadata } from 'next'
import { cacheLife } from 'next/cache'
import { Suspense } from 'react'
import { EmailSubscribe } from '@/app/work/coming-soon/email-subscribe'
import { Text } from '@/components/text'
import { Stack } from '@/styled/jsx'

export const metadata: Metadata = {
  description: 'Xero, Vend, Timely, Trade Me',
  title: 'Work',
}

export default async function Page() {
  cacheLife('max')
  return (
    <Stack>
      <Text display size="xl">
        Coming soon 👀
      </Text>
      <Suspense>
        <EmailSubscribe />
      </Suspense>
    </Stack>
  )
}
