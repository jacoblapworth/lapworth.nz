import { GetStaticProps, NextPage } from 'next'
import { MDXRemote } from 'next-mdx-remote'

import { images } from '@/app/work/vend/images'
import { TabsExample } from '@/app/work/vend/VendTabs'
import { Text } from '@/components/Typography'
import { MDXPageProps, prepareMDX } from '@/lib/markdown'
import { styled } from '@/styles'

export const getStaticProps: GetStaticProps<MDXPageProps> = async () => {
  const source = await prepareMDX({ fileName: 'vend-tabs-case-study' })
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
  marginBlockEnd: '$lg',
  position: 'relative',
})

export const Tabs: NextPage<MDXPageProps> = ({ source }) => {
  return (
    <>
      <Text as="h1" display size="large">
        {source.frontmatter?.title}
      </Text>
      <Grid>
        <MDXRemote
          {...source}
          components={{ TabsExample }}
          scope={{ images }}
        />
      </Grid>
    </>
  )
}

export default Tabs
