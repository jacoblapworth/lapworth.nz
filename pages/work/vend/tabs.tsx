import { GetStaticProps, NextPage } from 'next'
import NextImage from 'next/image'
import { MDXRemote } from 'next-mdx-remote'
import { NextSeo } from 'next-seo'

import { Text } from '@/components/Typography'
import { images } from '@/components/Work/Vend'
import { TabsExample } from '@/components/Work/Vend/Tabs'
import { MDXPageProps, prepareMDX } from '@/lib/markdown'
import { styled } from '@/styles'

export const getStaticProps: GetStaticProps<MDXPageProps> = async () => {
  const source = await prepareMDX({ fileName: 'tabs-case-study' })
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
})

const Image = styled(NextImage, {
  maxWidth: '100%',
  height: 'auto',
})

Image.defaultProps = {
  placeholder: 'blur',
}

export const Tabs: NextPage<MDXPageProps> = ({ title, source }) => {
  return (
    <>
      <NextSeo noindex={true} />
      <Text as="h1" display size="large">
        {title}
      </Text>

      <Grid>
        <TabsExample />
        <MDXRemote {...source} scope={{ images }} />
      </Grid>
    </>
  )
}

export default Tabs
