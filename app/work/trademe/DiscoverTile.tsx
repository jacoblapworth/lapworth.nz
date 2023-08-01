import { css } from 'styled/css'
import { styled } from 'styled/jsx'

import { PillLink } from '@/components/Button'
import { SkewTile } from '@/components/Tile/SkewTile'
import { Text } from '@/components/Typography'


import { SpotlightsPreview } from './Spotlight'

const Layout = styled('div', {
  base: {
    padding: 'md',
  },
})

const VStack = styled('div', {
  base: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    gap: 'md',
  },
})

export function DiscoverTile() {
  return (
    <SkewTile
      shine={false}
      className={css({
        gridColumn: '1/-1',
        sm: {
          gridColumn: '1/span 4',
        },
      })}
      shineClassName={css({
        mixBlendMode: 'multiply',
        backgroundColor: '#FFE18D',
        _dark: {
          mixBlendMode: 'soft-light',
        },
      })}
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
