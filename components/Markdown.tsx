/* eslint-disable @typescript-eslint/no-unused-vars */
import { ReactNode } from 'react'

import { MDXProvider } from '@mdx-js/react'
import { ComponentProps } from '@stitches/react'
import { MDXComponents } from 'mdx/types'
import NextImage from 'next/image'

import { Link } from '@/components/Link'
import { Text } from '@/components/Typography'
import { styled } from '@/styles'

const Image = styled(NextImage, {
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

const TextAnchor = ({ id, children, ...props }: TextProps) => {
  return (
    <Text display {...props}>
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

export const components: MDXComponents = {
  h1: ({ ref, ...props }) => <TextAnchor as="h1" size="large" {...props} />,
  h2: ({ ref, ...props }) => <TextAnchor as="h2" size="medium" {...props} />,
  h3: ({ ref, ...props }) => <TextAnchor as="h3" size="small" {...props} />,
  a: ({ ref, href, ...props }) => <Link href={href ?? ''} {...props} />,
  Image: (props: ImageProps) => (
    <Image {...props} alt={props.alt} placeholder="blur" />
  ),
  blockquote: ({ ref, children, ...props }) => (
    <Blockquote {...props}>
      <Text serif size="medium">
        &ldquo;{children}&rdquo;
      </Text>
    </Blockquote>
  ),
}

interface Props {
  children: ReactNode
}

export function MarkdownProvider({ children }: Props) {
  return <MDXProvider components={components}>{children}</MDXProvider>
}
