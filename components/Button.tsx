import {
  ComponentProps,
  HTMLAttributes,
  PropsWithChildren,
  ReactNode,
  forwardRef,
} from 'react'

import NextLink from 'next/link'

import { styled } from '@/styles'

import { ArrowIcon } from './Icons'

interface Props extends HTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
  href: string
}

export const Button: React.FC<PropsWithChildren<Props>> = ({
  children,
  href,
  className,
  ...rest
}) => {
  return (
    <NextLink href={href} passHref legacyBehavior>
      <button className={className} {...rest}>
        {children}
      </button>
    </NextLink>
  )
}

const Pill = styled(NextLink, {
  display: 'inline-grid',
  gridTemplateColumns: '1fr 24px',
  gridTemplateRows: '1fr',
  gap: '4px',
  alignItems: 'center',
  color: '$tertiary',
  paddingBlock: 4,
  paddingInline: '$sm',
  marginInline: '-$sm',
  borderRadius: '$max',

  '&:hover': {
    backgroundColor: '$surface',
  },

  variants: {
    inverted: {
      true: {
        '&:hover': {
          color: '$surface',
          backgroundColor: '$interactive',
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
