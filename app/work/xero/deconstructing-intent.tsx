import { MDXProvider } from '@mdx-js/react'
import { NextPage } from 'next'
import { MDXRemote } from 'next-mdx-remote'

import { Text } from '@/components/Typography'
import { images } from '@/components/Work/Xero'
import { MDXPageProps, prepareMDX } from '@/lib/markdown'
import { styled } from '@/styles'

export const getStaticProps: GetStaticProps<MDXPageProps> = async () => {
  const source = await prepareMDX({ fileName: 'deconstructing-intent' })

  return {
    props: {
      source,
      title: source.frontmatter?.title,
    },
  }
}

const Grid = styled('div', {
  display: 'grid',
  maxWidth: 1200,
  position: 'relative',
  marginBlockEnd: '$lg',
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
