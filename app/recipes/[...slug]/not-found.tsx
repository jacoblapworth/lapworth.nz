import { Metadata } from 'next'

import { PillLink } from '@/components/Button'
import { Text } from '@/components/Typography'

export const metadata: Metadata = {
  title: '404',
}

export default function Page() {
  return (
    <>
      <Text as="h1" display size="xlarge">
        You’ve found a lemon 🍋
      </Text>
      <p>Can’t find this recipe</p>
      <PillLink href="/recipes">Back to recipes</PillLink>
    </>
  )
}
