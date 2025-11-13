'use client'

import NextLink from 'next/link'
import { cva } from '@/styled/css'
import { styled } from '@/styled/jsx'

export const ButtonStyles = cva({
  base: {
    _hover: {
      backgroundColor: 'interactive',
      color: 'background',
    },
    borderColor: 'interactive',
    borderStyle: 'solid',
    borderWidth: 'borderWidths.1',
    cursor: 'pointer',
    display: 'inline-grid',
    gap: 4,
    gridAutoColumns: 'auto',
    gridAutoFlow: 'column',
    gridTemplateRows: '1fr',
    padding: 'sm',
    placeItems: 'center',
  },
  defaultVariants: {
    size: 'md',
  },
  variants: {
    size: {
      md: {
        fontSize: 'md',
        paddingBlock: 'sm',
        paddingInline: 'md',
      },
      sm: {
        fontSize: 'sm',
        paddingBlock: 'xs',
        paddingInline: 'sm',
      },
    },
    variant: {
      primary: {
        _hover: {
          backgroundColor: 'background',
          color: 'interactive',
        },
        backgroundColor: 'interactive',
        color: 'background',
      },
      secondary: {
        _hover: {
          backgroundColor: 'interactive',
          color: 'background',
        },
        backgroundColor: 'background',
        color: 'interactive',
      },
    },
  },
})

export const Button = styled('button', ButtonStyles)
export const LinkButton = styled(NextLink, ButtonStyles)
