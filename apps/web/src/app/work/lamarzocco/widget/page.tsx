import { VStack } from '@/styled/jsx'

import { LaMarzoccoWidget } from '.'

export default function Page() {
  return (
    <VStack alignItems="start" gap={16}>
      La Marzocco
      <LaMarzoccoWidget />
    </VStack>
  )
}
