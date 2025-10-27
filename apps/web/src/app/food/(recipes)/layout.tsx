import { Text } from '@/components/Typography'
import { styled } from '@/styled/jsx'

const Article = styled('article', {
  base: {
    alignItems: 'start',
    display: 'flex',
    flexDirection: 'column',
    gap: 'md',
  },
})
interface Props {
  children: React.ReactNode
  params: Promise<{ slug: string }>
}
export default async function Layout({ children, params }: Props) {
  const p = await params
  console.log(p)

  return (
    <Article>
      <Text as="h1" marginBlock="lg" size="xl">
        {/* {recipe.title} */}
      </Text>
      {children}
    </Article>
  )
}
