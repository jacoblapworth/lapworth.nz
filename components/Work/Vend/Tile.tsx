import { PillLink } from '@/components/Button'
import { SkewTile } from '@/components/Tile'
import { Text } from '@/components/Typography'
import { styled } from '@/styles'

const Layout = styled('div', {
  padding: '$md',
})

const VStack = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  gap: '$md',
})

export function VendTabsTile() {
  return (
    <SkewTile
      shine={false}
      css={{
        gridColumn: '1/-1',
        '@sm': {
          gridColumn: '1/span 4',
        },
      }}
      initial="initial"
      whileHover="hover"
    >
      <Layout>
        <VStack>
          <Text display size="medium">
            The influence of customer fit on a design system
          </Text>
          <PillLink href="/work/vend/tabs" inverted>
            Vend tabs case study
          </PillLink>
        </VStack>
      </Layout>
    </SkewTile>
  )
}
