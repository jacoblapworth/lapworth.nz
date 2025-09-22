'use client'

import type { MDXComponents } from 'mdx/types'
import NextImage from 'next/image'

import type {
  AnchorHTMLAttributes,
  BlockquoteHTMLAttributes,
  ComponentProps,
  HTMLAttributes,
} from 'react'

import { Link } from '@/components/Link'
import { Text } from '@/components/Typography'
import { styled } from '@/styled/jsx'

export const Image = styled(NextImage, {
  base: {
    '& + img': {
      marginBlockStart: -1,
    },
    border: 'muted',
    boxSizing: 'border-box',
    height: 'auto',
    maxWidth: '100%',
  },
})

export const Blockquote = styled('blockquote', {
  base: {
    //TODO: fix
    // [`& ${Text}`]: {
    //   maxWidth: '35ch',
    // },

    '& p': {
      all: 'unset',
      display: 'inline-block',
      position: 'relative',
      // maxBlockSize: '35ch',
    },
    borderTop: 'muted',
    display: 'inline',
    hangingPunctuation: 'first last',
    lineHeight: '2.5rem',
    marginBlock: 'md',
    marginInline: 0,
    paddingBlock: 'md',
  },
})

type TextProps = ComponentProps<typeof Text>

export const HeadingAnchor = ({ children, ...props }: TextProps) => {
  // const pathname = usePathname()

  return (
    <Text display css={{ marginBlock: 'lg' }} {...props}>
      {/* <Link
        href={`${pathname}#${props.id}`}
        sameTab
        css={{ display: 'inline-flex', gap: 'sm', alignItems: 'center' }}
      > */}
      {children}
      {/* </Link> */}
    </Text>
  )
}

export const Wrapper = styled('div', {
  base: {
    display: 'grid',
    gridAutoColumns: 'auto',
    gridAutoFlow: 'row',
    marginBlockEnd: 'lg',
    maxWidth: 1000,
    position: 'relative',
  },
})

type HeadingProps = HTMLAttributes<HTMLHeadingElement>

export const h1 = (props: HeadingProps) => (
  <HeadingAnchor as="h1" size="lg" {...props} />
)

export const h2 = (props: HeadingProps) => (
  <HeadingAnchor as="h2" size="md" {...props} />
)

export const h3 = (props: HeadingProps) => (
  <HeadingAnchor as="h3" size="sm" {...props} />
)

type AProps = AnchorHTMLAttributes<HTMLAnchorElement>

export const a = ({ href, ...props }: AProps) => (
  <Link href={href ?? ''} {...props} />
)

type BlockquoteProps = BlockquoteHTMLAttributes<HTMLQuoteElement>

export const blockquote = ({ children, ...props }: BlockquoteProps) => (
  <Blockquote {...props}>
    <Text serif size="md">
      &ldquo;{children}&rdquo;
    </Text>
  </Blockquote>
)

export const P = styled('p', {
  base: {
    marginBlockEnd: 'md',
  },
})

export const Ul = styled('ul', {
  base: {
    listStylePosition: 'inside',
    listStyleType: 'square',
    marginBlock: 'md',
    paddingInlineStart: 'sm',
  },
})

export const Ol = styled('ol', {
  base: {
    listStylePosition: 'outside',
    listStyleType: 'decimal',
    marginBlock: 'md',
  },
})

export const Li = styled('li', {
  base: {
    paddingInlineStart: 'sm',
  },
})

export const components: MDXComponents = {
  a,
  blockquote,
  h1,
  h2: h2,
  h3,
  Image,
  img: Image,
  li: Li,
  ol: Ol,
  p: P,
  ul: Ul,
  wrapper: Wrapper,
}
