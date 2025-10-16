import type { Metadata } from 'next'
import { Text } from '@/components/Typography'
import { VStack } from '@/styled/jsx'

export const metadata: Metadata = {
  description: 'Request a copy of my CV.',
  title: 'CV',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <VStack alignItems="start">
      <Text as="h1" display size="lg">
        Request CV
      </Text>
      {children}
    </VStack>
  )
}
