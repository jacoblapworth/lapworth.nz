'use client'

import NextLink from 'next/link'
import { type ComponentProps, forwardRef, type ReactNode } from 'react'

import { cva } from '@/styled/css'
import { styled } from '@/styled/jsx'

import { ArrowIcon } from './Icons'

export const ButtonStyles = cva({
  base: {
    _hover: {
      backgroundColor: 'interactive',
      color: 'background',
    },
    borderColor: 'interactive',
    borderStyle: 'solid',
    borderWidth: '1px',
    cursor: 'pointer',
    padding: 'sm',
  },
})

export const Button = styled('button', ButtonStyles)
export const LinkButton = styled(NextLink, ButtonStyles)

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

export const PillLink = forwardRef<HTMLAnchorElement, PillLinkProps>(
  function PillLink({ children, ...rest }, ref) {
    return (
      <Pill ref={ref} {...rest}>
        {children}
        <ArrowIcon />
      </Pill>
    )
  },
)
