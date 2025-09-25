'use client'

import NextLink from 'next/link'
import type { ComponentProps } from 'react'

import { styled } from '@/styled/jsx'

const Anchor = styled(NextLink, {
  base: {
    _hover: {
      textDecorationColor: 'interactive',
    },
    textDecorationColor: 'quaternary',
    textDecorationLine: 'underline',
  },
})

type AProps = ComponentProps<typeof Anchor>

interface Props extends AProps {
  sameTab?: boolean
}

export const Link = ({ children, href, sameTab, ...rest }: Props) => {
  const target = sameTab ? undefined : '_blank'
  const rel = sameTab ? undefined : 'noopener noreferrer'

  return (
    <Anchor href={href} rel={rel} target={target} {...rest}>
      {children}
    </Anchor>
  )
}
