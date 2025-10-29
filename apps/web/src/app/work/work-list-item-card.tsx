'use client'

import Image from 'next/image'
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
    fontSize: 'sm',
    gap: 'xs',
    textDecoration: 'none',
    width: '100%',
  },
})

const Cover = styled(Image, {
  base: {
    aspectRatio: '16 / 9',
    border: 'muted',
    borderRadius: 'sm',
    objectFit: 'cover',
    width: '100%',
  },
})

interface Props {
  item: Work
}

export function WorkListItemCard({ item }: Props) {
  const format = useFormatter()
  const { slug, cover, title, date } = item
  return (
    <Link href={`/work/${slug}`}>
      {cover && <Cover alt={title} placeholder="blur" src={cover} />}
      <VStack alignItems="start" gap="xs">
        <Text bold size="sm">
          {title}
        </Text>
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
