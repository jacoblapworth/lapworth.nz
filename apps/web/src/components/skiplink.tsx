'use client'

import Link from 'next/link'
import { styled } from '@/styled/jsx'

export const Skiplink = styled(Link, {
  base: {
    _focus: {
      transform: 'translateY(token(spacing.md))',
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
    transform: 'translateY(calc(-100% - token(spacing.lg)))',
    transition: 'md',
    zIndex: '4',
  },
})
