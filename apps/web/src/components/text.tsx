import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import { cva, type RecipeVariantProps } from '@/styled/css'
import { styled } from '@/styled/jsx'
import type { JsxStyleProps } from '@/styled/types'

const styles = cva({
  base: {
    color: 'text',
    fontWeight: 400,
  },
  compoundVariants: [
    {
      css: {
        maxWidth: '25ch',
        textStyle: 'display.xl',
      },
      display: true,
      size: 'xl',
    },
    {
      css: {
        textStyle: 'display.lg',
      },
      display: true,
      size: 'lg',
    },
    {
      css: {
        textStyle: 'display.md',
      },
      display: true,
      size: 'md',
    },
    {
      css: {
        textStyle: 'display.sm',
      },
      display: true,
      size: 'sm',
    },
  ],
  defaultVariants: {
    size: 'md',
  },
  variants: {
    bold: {
      true: { fontWeight: '600' },
    },
    display: {
      true: {},
    },
    serif: {
      true: {
        fontFamily: 'serif',
        fontWeight: '400',
      },
    },
    size: {
      lg: {
        maxWidth: '40ch',
        textStyle: 'body.lg',
      },
      md: {
        textStyle: 'body.md',
      },
      sm: {
        textStyle: 'body.sm',
      },
      xl: {
        maxWidth: '40ch',
        textStyle: 'body.xl',
      },
    },
  },
})

type Variants = RecipeVariantProps<typeof styles>

type TextHTMLElements = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p'

export type TextProps<T extends ElementType = TextHTMLElements> = Variants & {
  children?: ReactNode
  as?: T
} & ComponentPropsWithoutRef<T> &
  JsxStyleProps

export const Text = <T extends ElementType>({ as, ...props }: TextProps<T>) => {
  const tag: ElementType = as ?? 'p'
  const Component = styled(tag, styles)

  return <Component {...props} />
}
