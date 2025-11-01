import { Suspense } from 'react'
import { VStack } from '@/styled/jsx'
import { LaMarzoccoWidget } from '../widget'

export default function Page() {
  return (
    <VStack alignItems="start" gap={16}>
      La Marzocco
      <Suspense>
        <LaMarzoccoWidget />
      </Suspense>
    </VStack>
  )
}
