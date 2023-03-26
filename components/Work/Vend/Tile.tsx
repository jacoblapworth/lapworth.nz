import { PillLink } from '@/components/Button'
import { SkewTile } from '@/components/Tile'
import { Text } from '@/components/Typography'
import { darkTheme, styled } from '@/styles'

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
        backgroundColor: '#fff',
        borderColor: '#d8eeee',
        [`.${darkTheme} &`]: {
          backgroundColor: '#111e2b',
          borderColor: '#414a66',
        },
      }}
      shineCss={{
        mixBlendMode: 'multiply',
        backgroundColor: '#FFE18D',
        [`.${darkTheme} &`]: {
          mixBlendMode: 'soft-light',
        },
      }}
      initial="initial"
      whileHover="hover"
    >
      <Layout>
        <VStack>
          <Text display size="medium">
            Customer fit changing design system components
          </Text>
          <PillLink
            href="/work/vend/tabs"
            css={{ marginInlineStart: '-$sm' }}
            inverted
          >
            Vend tabs case study
          </PillLink>
        </VStack>
      </Layout>
    </SkewTile>
  )
}
