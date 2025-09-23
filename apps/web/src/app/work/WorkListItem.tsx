'use client'

import Image from 'next/image'
import NextLink from 'next/link'
import { useFormatter } from 'next-intl'
import { Text } from '@/components/Typography'
import type { Work } from '@/content'
import { styled, VStack } from '@/styled/jsx'

const Link = styled(NextLink, {
  base: {
    _hover: {
      textDecoration: 'underline',
    },
    color: 'primary',
    display: 'flex',
    flexDirection: 'column',
    fontSize: 'lg',
    gap: 'sm',
    textDecoration: 'none',
  },
})

const Cover = styled(Image, {
  base: {
    border: 'muted',
  },
})

interface Props {
  item: Work
}

export function WorkListItem({ item }: Props) {
  const format = useFormatter()
  const { slug, cover, title, date } = item
  return (
    <Link href={`/work/${slug}`}>
      {cover && <Cover alt={title} src={cover} />}
      <VStack alignItems="start" gap="xs">
        {title}
        <Text color="tertiary">
          {format.dateTime(new Date(date), {
            month: 'short',
            year: 'numeric',
          })}
        </Text>
      </VStack>
    </Link>
  )
}
