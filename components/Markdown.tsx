/* eslint-disable @typescript-eslint/no-unused-vars */
import { ReactNode } from 'react'

import { MDXProvider } from '@mdx-js/react'
import { MDXComponents } from 'mdx/types'
import NextImage from 'next/image'

import { Link } from '@/components/Link'
import { Text } from '@/components/Typography'
import { styled } from '@/styles'

const Image = styled(NextImage, {
  maxWidth: '100%',
  height: 'auto',
})

type ImageProps = React.ComponentProps<typeof Image>

const Blockquote = styled('blockquote', {
  backgroundColor: '$surface',
  borderLeft: '1px solid $interactive',
  marginInline: 0,
  marginBlock: '$md',
  padding: '$md',
  display: 'inline',

  '& p': {
    display: 'inline',
  },
})

export const components: MDXComponents = {
  h1: ({ ref, ...props }) => <Text as="h1" size="large" display {...props} />,
  h2: ({ ref, ...props }) => <Text as="h2" size="medium" display {...props} />,
  h3: ({ ref, ...props }) => <Text as="h3" size="small" display {...props} />,
  a: ({ ref, ...props }) => <Link {...props} />,
  Image: (props: ImageProps) => (
    <Image {...props} alt={props.alt} placeholder="blur" />
  ),
  blockquote: ({ ref, ...props }) => <Blockquote {...props} />,
}

interface Props {
  children: ReactNode
}

export function MarkdownProvider({ children }: Props) {
  return <MDXProvider components={components}>{children}</MDXProvider>
}
