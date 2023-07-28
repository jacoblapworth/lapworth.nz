import { ComponentProps } from 'react'

import NextLink from 'next/link'

import { styled } from '@/styled-system/jsx'

const A = styled(NextLink, {
  base: {
    textDecorationLine: 'underline',
    textDecorationColor: 'quaternary',
    '&:hover': {
      textDecorationColor: 'interactive',
    },
  },
})

type AProps = ComponentProps<typeof A>

interface Props extends AProps {
  sameTab?: boolean
}

export const Link = ({ children, href, sameTab, ...rest }: Props) => {
  const target = sameTab ? undefined : '_blank'
  const rel = sameTab ? undefined : 'noopener noreferrer'

  return (
    <A target={target} rel={rel} href={href} {...rest}>
      {children}
    </A>
  )
}
