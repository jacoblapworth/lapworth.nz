import type { Metadata } from 'next'

import { EmailSubscribe } from '@/components/EmailSubscribe'
import { Text } from '@/components/Typography'
import { Stack } from '@/styled/jsx'

export const metadata: Metadata = {
  description: 'Xero, Vend, Timely, Trade Me',
  title: 'Work',
}

export default function Page() {
  return (
    <Stack>
      <Text display size="xl">
        Coming soon 👀
      </Text>
      <EmailSubscribe />
    </Stack>
  )
}
