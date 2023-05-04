import NextImage from 'next/image'

import { images } from '@/app/work/vend/images'
import { TabsExample } from '@/app/work/vend/VendTabs'
import { ContentGrid } from '@/components/ContentGrid'
import { Text } from '@/components/Typography'
import { prepareMDX } from '@/lib/markdown'
import { styled } from '@/styles'

const Image = styled(NextImage, {})

Image.defaultProps = {
  placeholder: 'blur',
  style: {
    maxWidth: '100%',
    height: 'auto',
  },
}

export default async function Page() {
  const { content, frontmatter } = await prepareMDX({
    fileName: 'tabs',
    directory: 'app/work/vend/tabs',
    options: {
      scope: { images },
    },
    components: { TabsExample, Image },
  })

  return (
    <>
      <Text as="h1" display size="large">
        {frontmatter.title}
      </Text>
      <ContentGrid>{content}</ContentGrid>
    </>
  )
}
