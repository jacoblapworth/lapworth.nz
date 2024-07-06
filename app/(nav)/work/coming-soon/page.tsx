import { Metadata } from 'next'

import { Stack } from 'styled/jsx'

import { EmailSubscribe } from '@/components/EmailSubscribe'
import { Text } from '@/components/Typography'

export const metadata: Metadata = {
  title: 'Work',
  description: 'Xero, Vend, Timely, Trade Me',
}

export default function Page() {
  return (
    <Stack>
      <Text size="xlarge" display>
        Coming soon 👀
      </Text>
      <EmailSubscribe />
    </Stack>
  )
}
