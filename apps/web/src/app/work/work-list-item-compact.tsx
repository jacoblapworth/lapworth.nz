'use client'

import NextLink from 'next/link'
import { useFormatter } from 'next-intl'
import { Text } from '@/components/text'
import { styled, VStack } from '@/styled/jsx'
import type { Work } from './work'

const Link = styled(NextLink, {
  base: {
    _hover: {
      textDecoration: 'underline',
    },
    color: 'primary',
    display: 'flex',
    flexDirection: 'column',
    fontSize: 'md',
    gap: 'xs',
    textDecoration: 'none',
  },
})

interface Props {
  item: Work
}

export function WorkListItemCompact({ item }: Props) {
  const format = useFormatter()
  const { slug, title, date } = item
  return (
    <Link href={`/work/${slug}`}>
      <VStack alignItems="start" gap="xs">
        <Text size="md">{title}</Text>
        <Text color="tertiary" size="sm">
          {format.dateTime(new Date(date), {
            month: 'short',
            year: 'numeric',
          })}
        </Text>
      </VStack>
    </Link>
  )
}
