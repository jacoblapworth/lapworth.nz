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

const Wrapper = styled('div', {
  display: 'grid',
  gridAutoColumns: 'auto',
  gridAutoFlow: 'row',
  maxWidth: 1000,
  position: 'relative',
  marginBlockEnd: '$lg',
})

export const components: MDXComponents = {
  wrapper: Wrapper,
  h1: ({ ref, ...props }) => (
    <TextAnchor as="h1" size="large" css={{ marginBlock: '$lg' }} {...props} />
  ),
  h2: ({ ref, ...props }) => (
    <TextAnchor as="h2" size="medium" css={{ marginBlock: '$lg' }} {...props} />
  ),
  h3: ({ ref, ...props }) => (
    <TextAnchor as="h3" size="small" css={{ marginBlock: '$lg' }} {...props} />
  ),
  a: ({ ref, href, ...props }) => <Link href={href ?? ''} {...props} />,
  img: (props) => {
    console.log({ props })
    return <>image</>
    //   return <Image {...props} alt={props.alt ?? ''} placeholder="blur" />
  },
  Image: (props: ImageProps) => (
    <Image placeholder="blur" quality={100} {...props} alt={props.alt} />
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
