import { ArrowLeftIcon } from 'lucide-react'
import type { ReactNode } from 'react'
import { LinkButton } from '@/components/Button'
import { Text } from '@/components/text'
import { VStack } from '@/styled/jsx'

interface Props {
  title?: ReactNode
  description?: ReactNode
  action?: {
    href: string
    label: string
  }
}

export function NotFound({
  title = '404',
  description = 'This page doesn’t exist. Try heading back home to start from the beginning.',
  action = {
    href: '/',
    label: 'Back to home',
  },
}: Props) {
  return (
    <>
      <Text as="h1" display size="xl">
        {title}
      </Text>
      <VStack alignItems="start">
        <p>{description}</p>
        <LinkButton href={action.href} variant="primary">
          <ArrowLeftIcon size={16} />
          {action.label}
        </LinkButton>
      </VStack>
    </>
  )
}
