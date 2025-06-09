import { ComponentProps, ReactNode, forwardRef } from 'react'

import NextLink from 'next/link'

import { cva } from 'styled/css'
import { styled } from 'styled/jsx'

import { ArrowIcon } from './Icons'

export const ButtonStyles = cva({
  base: {
    padding: 'sm',
    cursor: 'pointer',
    borderColor: 'interactive',
    borderWidth: '1px',
    borderStyle: 'solid',
    _hover: {
      backgroundColor: 'interactive',
      color: 'background',
    },
  },
})

export const Button = styled('button', ButtonStyles)
export const LinkButton = styled(NextLink, ButtonStyles)

const Pill = styled(NextLink, {
  base: {
    display: 'inline-grid',
    gridTemplateColumns: '1fr 24px',
    gridTemplateRows: '1fr',
    gap: '4px',
    alignItems: 'center',
    color: 'interactive',
    paddingBlock: 4,
    paddingInline: 'sm',
    border: '1px solid token(colors.primary)',
    // borderRadius: 'max',

    '&:hover': {
      backgroundColor: 'surface',
    },
  },

  variants: {
    inverted: {
      true: {
        '&:hover': {
          color: 'surface',
          backgroundColor: 'interactive',
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
