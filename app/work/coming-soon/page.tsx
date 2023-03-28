import { Metadata } from 'next'

import { Text } from '@/components/Typography'

export const metadata: Metadata = {
  title: 'Work',
  description: 'Xero, Vend, Timely, Trade Me',
}

export default function Page() {
  return (
    <Text size="xlarge" display>
      Coming soon 👀
    </Text>
  )
}
