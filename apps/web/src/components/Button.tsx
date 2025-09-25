'use client'

import { ArrowRightIcon } from 'lucide-react'
import NextLink from 'next/link'
import type { ComponentProps, ReactNode } from 'react'
import { cva } from '@/styled/css'
import { styled } from '@/styled/jsx'

export const styles = cva({
  base: {
    _hover: {
      backgroundColor: 'interactive',
      color: 'background',
    },
    borderColor: 'interactive',
    borderStyle: 'solid',
    borderWidth: '1px',
    cursor: 'pointer',
    display: 'inline-grid',
    gap: '4px',
    gridTemplateColumns: '1fr 24px',
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
  },
})

export const Button = styled('button', styles)
export const LinkButton = styled(NextLink, styles)

const Pill = styled(NextLink, {
  base: {
    // borderRadius: 'max',

    '&:hover': {
      backgroundColor: 'surface',
    },
    alignItems: 'center',
    border: '1px solid token(colors.primary)',
    color: 'interactive',
    display: 'inline-grid',
    gap: '4px',
    gridTemplateColumns: '1fr 24px',
    gridTemplateRows: '1fr',
    paddingBlock: 4,
    paddingInline: 'sm',
  },

  variants: {
    inverted: {
      true: {
        '&:hover': {
          backgroundColor: 'interactive',
          color: 'surface',
        },
      },
    },
  },
})

interface PillLinkProps extends ComponentProps<typeof Pill> {
  children: ReactNode
}

export function PillLink({ children, ref, ...rest }: PillLinkProps) {
  return (
    <Pill ref={ref} {...rest}>
      {children}
      <ArrowRightIcon />
    </Pill>
  )
}
