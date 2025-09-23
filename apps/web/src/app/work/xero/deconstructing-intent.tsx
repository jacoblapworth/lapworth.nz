import { MDXProvider } from '@mdx-js/react'
import type { NextPage } from 'next'
import { MDXRemote } from 'next-mdx-remote'

import { images } from '@/app/work/xero/images'
import { Text } from '@/components/Typography'
import type { MDXPageProps } from '@/lib/markdown'
import { styled } from '@/styled/jsx'

const Grid = styled('div', {
  base: {
    display: 'grid',
    marginBlockEnd: 'lg',
    maxWidth: 1200,
    position: 'relative',
  },
})

export const Xero: NextPage<MDXPageProps> = ({ source }) => {
  return (
    <MDXProvider>
      <Grid>
        <Text as="h1" display size="lg">
          {source.frontmatter?.title}
        </Text>
        <MDXRemote {...source} scope={{ images }} />
      </Grid>
    </MDXProvider>
  )
}

export default Xero
