'use client'

/* eslint-disable @typescript-eslint/no-unused-vars */
import type {
  ReactNode,
  HTMLAttributes,
  AnchorHTMLAttributes,
  BlockquoteHTMLAttributes,
} from 'react'

import { MDXProvider } from '@mdx-js/react'
import { ComponentProps } from '@stitches/react'
import { MDXComponents } from 'mdx/types'
import NextImage from 'next/image'

import { Link } from '@/components/Link'
import { Text } from '@/components/Typography'
import { styled } from '@/styles'

export const Image = styled(NextImage, {
  maxWidth: '100%',
  height: 'auto',
  border: '1px solid $quaternary',
  boxSizing: 'border-box',
  '& + img': {
    marginBlockStart: -1,
  },
})

type ImageProps = ComponentProps<typeof Image>

const Blockquote = styled('blockquote', {
  borderTop: '1px solid $quaternary',
  marginInline: 0,
  marginBlock: '$md',
  paddingBlock: '$md',
  display: 'inline',
  lineHeight: '2.5rem',
  hangingPunctuation: 'first last',

  [`& ${Text}`]: {
    maxWidth: '35ch',
  },

  '& p': {
    all: 'unset',
    display: 'inline-block',
    position: 'relative',
    // maxBlockSize: '35ch',
  },
})

interface TextProps extends ComponentProps<typeof Text> {
  as?: React.ElementType
}

export const HeadingAnchor = ({ id, children, ...props }: TextProps) => {
  return (
    <Text display css={{ marginBlock: '$lg' }} {...props}>
      <Link
        href={`#${id}`}
        sameTab
        css={{ display: 'inline-flex', gap: '$sm', alignItems: 'center' }}
      >
        {children}
      </Link>
    </Text>
  )
}

export const Wrapper = styled('div', {
  display: 'grid',
  gridAutoColumns: 'auto',
  gridAutoFlow: 'row',
  maxWidth: 1000,
  position: 'relative',
  marginBlockEnd: '$lg',
})

type HeadingProps = HTMLAttributes<HTMLHeadingElement>

export const h1 = (props: HeadingProps) => (
  <HeadingAnchor as="h1" size="large" {...props} />
)

export const h2 = (props: HeadingProps) => (
  <HeadingAnchor as="h2" size="medium" {...props} />
)

export const h3 = (props: HeadingProps) => (
  <HeadingAnchor as="h3" size="small" {...props} />
)

type AProps = AnchorHTMLAttributes<HTMLAnchorElement>

export const a = ({ href, ...props }: AProps) => (
  <Link href={href ?? ''} {...props} />
)

type BlockquoteProps = BlockquoteHTMLAttributes<HTMLQuoteElement>

export const blockquote = ({ children, ...props }: BlockquoteProps) => (
  <Blockquote {...props}>
    <Text serif size="medium">
      &ldquo;{children}&rdquo;
    </Text>
  </Blockquote>
)

export const components: MDXComponents = {
  wrapper: Wrapper,
  h1,
  h2,
  h3,
  a,
  Image,
  blockquote,
}

interface Props {
  children: ReactNode
}

export function MarkdownProvider({ children }: Props) {
  return <MDXProvider components={components}>{children}</MDXProvider>
}
