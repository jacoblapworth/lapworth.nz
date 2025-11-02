import NextLink from 'next/link'
import type { ComponentProps } from 'react'
import { cva, cx, type RecipeVariantProps } from '@/styled/css'

const styles = cva({
  base: {
    _hover: {
      textDecorationColor: 'interactive',
    },
    textDecorationColor: 'quaternary',
    textDecorationLine: 'underline',
  },
})

type AnchorVariants = RecipeVariantProps<typeof styles>

type Props = AnchorVariants &
  ComponentProps<typeof NextLink> & {
    sameTab?: boolean
  }

export function Link({ children, href, className, sameTab, ...rest }: Props) {
  const target = sameTab ? undefined : '_blank'
  const rel = sameTab ? undefined : 'noopener noreferrer'

  return (
    <NextLink
      className={cx(styles(), className)}
      href={href}
      rel={rel}
      target={target}
      {...rest}
    >
      {children}
    </NextLink>
  )
}
