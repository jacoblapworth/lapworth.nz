'use client'

import Image from 'next/image'
import NextLink from 'next/link'
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
  const { slug, cover, title, date } = item
  return (
    <div key={slug}>
      <Link href={`/work/${slug}`}>
        {cover && <Image src={cover} alt={title} width={500} height={300} />}
        {title}
        <Text color="tertiary">{new Date(date).toLocaleDateString()}</Text>
      </Link>
    </div>
  )
}
