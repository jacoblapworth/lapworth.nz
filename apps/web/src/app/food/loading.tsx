import { Text } from '@/components/text'
import { VStack } from '@/styled/jsx'

export default function Loading() {
  return (
    <VStack alignItems="start" gap="lg" marginBlock="lg">
      <Text as="h1" size="xl">
        Recipes
      </Text>
    </VStack>
  )
}
