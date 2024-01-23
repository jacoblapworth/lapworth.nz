// import { images } from '@/app/work/vend/images'
// import { TabsExample } from '@/app/work/vend/VendTabs'
import { Text } from '@/components/Typography'
// import { prepareMDX } from '@/lib/markdown'

export default async function Page() {
  // const { content, frontmatter } = await prepareMDX({
  //   fileName: 'tabs',
  //   directory: 'app/work/vend/tabs',
  //   options: {
  //     scope: { images },
  //   },
  //   components: { TabsExample },
  // })

  return (
    <>
      <Text as="h1" display size="large">
        {/* {frontmatter.title} */}Test
      </Text>
    </>
  )
}
