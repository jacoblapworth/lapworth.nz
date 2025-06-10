import { NextPage } from 'next'

import { MDXProvider } from '@mdx-js/react'
import { MDXRemote } from 'next-mdx-remote'

import { images } from '@/src/app/work/xero/images'
import { Text } from '@/src/components/Typography'
import { MDXPageProps } from '@/src/lib/markdown'
import { styled } from 'styled/jsx'

const Grid = styled('div', {
  base: {
    display: 'grid',
    maxWidth: 1200,
    position: 'relative',
    marginBlockEnd: 'lg',
  },
})

export const Xero: NextPage<MDXPageProps> = ({ source }) => {
  return (
    <MDXProvider>
      <Grid>
        <Text as="h1" display size="large">
          {source.frontmatter?.title}
        </Text>
        <MDXRemote {...source} scope={{ images }} />
      </Grid>
    </MDXProvider>
  )
}

export default Xero
