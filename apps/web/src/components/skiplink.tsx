'use client'

import Link from 'next/link'
import { styled } from '@/styled/jsx'

export const Skiplink = styled(Link, {
  base: {
    _focus: {
      translateY: 'md',
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
    transition: 'md',
    translate: 'auto',
    translateY: 'calc(-100% - token(spacing.lg))',
    zIndex: '4',
  },
})
