import type { ReactNode, ElementType, ComponentPropsWithoutRef } from 'react'

import { RecipeVariantProps, cva } from '@/styled-system/css'
import { styled } from '@/styled-system/jsx'

const styles = cva({
  base: {
    color: 'text',
    cursor: 'auto',
    fontWeight: 400,
  },
  variants: {
    size: {
      small: {
        fontSize: '0.8rem',
      },
      medium: {
        fontSize: '1rem',
        lineHeight: '1.5rem',
      },
      large: {
        fontSize: '2rem',
        lineHeight: '2rem',
      },
      xlarge: {
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
      size: 'xlarge',
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
      size: 'large',
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
      size: 'medium',
      css: {
        fontSize: '1.4rem',
        sm: {
          fontSize: '1.5rem',
        },
      },
    },
    {
      display: true,
      size: 'small',
      css: {
        fontSize: '1.2rem',
        sm: {
          fontSize: '1.2rem',
        },
      },
    },
  ],
  defaultVariants: {
    size: 'medium',
  },
})

type Variants = RecipeVariantProps<typeof styles>

type TextHTMLElements = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p'

export type TextProps<T extends ElementType = TextHTMLElements> = Variants & {
  children?: ReactNode
  as?: T
} & ComponentPropsWithoutRef<T>

export const Text = <T extends ElementType>({ as, ...props }: TextProps<T>) => {
  const tag: ElementType = as ?? 'p'
  const Component = styled(tag, styles)

  return <Component {...props} />
}
