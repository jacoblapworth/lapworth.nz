'use client'

import Image from 'next/image'
import NextLink from 'next/link'
import { useFormatter } from 'next-intl'
import { Tag } from '@/components/Tag'
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
  const { draft, slug, cover, title, date, description } = item
  return (
    <Link href={`/work/${slug}`}>
      {cover && <Cover alt={title} placeholder="blur" src={cover} />}
      <VStack alignItems="start" gap="xs">
        {draft && <Tag sentiment="warning">Draft</Tag>}
        {title}
        <Text>{description}</Text>
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
