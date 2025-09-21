'use client'

import Link from 'next/link'
import { styled } from '@/styled/jsx'

export const Skiplink = styled(Link, {
  base: {
    position: 'absolute',
    top: 0,
    left: 0,
    margin: 'md',
    padding: 'md',
    transform: 'translateY(calc(-100% - 32px))',
    zIndex: '4',
    borderRadius: 'md',
    color: 'surface',
    backgroundColor: 'interactive',
    boxShadow: 'md',
    transition: 'md',

    _focus: {
      transform: 'translateY(16px)',
    },
  },
})
