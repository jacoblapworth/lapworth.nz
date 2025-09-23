'use client'

import Image from 'next/image'
import NextLink from 'next/link'
import { useFormatter } from 'next-intl'
import { Text } from '@/components/Typography'
import type { Work } from '@/content'
import { styled } from '@/styled/jsx'

const Link = styled(NextLink, {
  base: {
    _hover: {
      textDecoration: 'underline',
    },
    color: 'primary',
    display: 'flex',
    flexDirection: 'column',
    fontSize: 'lg',
    textDecoration: 'none',
  },
})

interface Props {
  item: Work
}

export function WorkListItem({ item }: Props) {
  const format = useFormatter()
  const { slug, cover, title, date } = item
  return (
    <div key={slug}>
      <Link href={`/work/${slug}`}>
        {cover && <Image alt={title} height={300} src={cover} width={500} />}
        {title}
        <Text color="tertiary">
          {format.dateTime(new Date(date), {
            month: 'short',
            year: 'numeric',
          })}
        </Text>
      </Link>
    </div>
  )
}
