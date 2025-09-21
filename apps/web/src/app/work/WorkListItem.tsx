'use client'

import NextLink from 'next/link'
import { styled } from '@/styled/jsx'

export const Link = styled(NextLink, {
  base: {
    fontSize: 'lg',
    display: 'flex',
    flexDirection: 'column',
    color: 'primary',
    textDecoration: 'none',
    _hover: {
      textDecoration: 'underline',
    },
  },
})
