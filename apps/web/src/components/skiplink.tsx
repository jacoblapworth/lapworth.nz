'use client'

import Link from 'next/link'
import { styled } from '@/styled/jsx'

export const Skiplink = styled(Link, {
  base: {
    _focus: {
      transform: 'translateY(16px)',
    },
    backgroundColor: 'interactive',
    borderRadius: 'md',
    boxShadow: 'md',
    color: 'surface',
    left: 0,
    margin: 'md',
    padding: 'md',
    position: 'absolute',
    top: 0,
    transform: 'translateY(calc(-100% - 32px))',
    transition: 'md',
    zIndex: '4',
  },
})
