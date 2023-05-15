import { PillLink } from '@/components/Button'
import { SkewTile } from '@/components/Tile/SkewTile'
import { Text } from '@/components/Typography'
import { styled } from '@/styles'

import { SpotlightsPreview } from './Spotlight'

const Layout = styled('div', {
  padding: '$md',
})

const VStack = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  gap: '$md',
})

export function DiscoverTile() {
  return (
    <SkewTile
      shine={false}
      css={{
        gridColumn: '1/-1',
        '@sm': {
          gridColumn: '1/span 4',
        },
      }}
      // shineCss={{
      //   mixBlendMode: 'multiply',
      //   backgroundColor: '#FFE18D',
      //   [`.${darkTheme} &`]: {
      //     mixBlendMode: 'soft-light',
      //   },
      // }}
      initial="initial"
      whileHover="hover"
    >
      <Layout>
        <VStack>
          <Text display size="medium">
            Increasing traffic to business verticals on mobile
          </Text>
          <PillLink href="/work/trademe" inverted>
            Discover Trade Me
          </PillLink>
        </VStack>
        <SpotlightsPreview />
      </Layout>
    </SkewTile>
  )
}
