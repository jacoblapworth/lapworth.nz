import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import { cva, type RecipeVariantProps } from '@/styled/css'
import { type HTMLStyledProps, styled } from '@/styled/jsx'
import type { JsxStyleProps } from '@/styled/types'

const styles = cva({
  base: {
    color: 'text',
    fontWeight: 400,
  },
  variants: {
    size: {
      sm: {
        fontSize: '0.8rem',
      },
      md: {
        fontSize: '1rem',
        lineHeight: '1.5rem',
      },
      lg: {
        fontSize: '2rem',
        lineHeight: '2rem',
      },
      xl: {
        fontSize: '3rem',
        lineHeight: '3rem',
      },
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
  },
  compoundVariants: [
    {
      display: true,
      size: 'xl',
      css: {
        maxWidth: '25ch',
        fontSize: '4rem',
        lineHeight: '4rem',
        marginBlock: '4rem',
        sm: {
          fontSize: '6rem',
          lineHeight: '6rem',
          marginBlock: '5rem',
        },
      },
    },
    {
      display: true,
      size: 'lg',
      css: {
        fontSize: '2rem',
        lineHeight: '2rem',
        marginBlock: '2rem',
        sm: {
          fontSize: '3rem',
          lineHeight: '3rem',
          marginBlock: '3rem',
        },
      },
    },
    {
      display: true,
      size: 'md',
      css: {
        fontSize: '1.4rem',
        sm: {
          fontSize: '1.5rem',
        },
      },
    },
    {
      display: true,
      size: 'sm',
      css: {
        fontSize: '1.2rem',
        sm: {
          fontSize: '1.2rem',
        },
      },
    },
  ],
  defaultVariants: {
    size: 'md',
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
