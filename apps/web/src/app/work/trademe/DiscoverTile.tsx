'use client'

import { PillLink } from '@/components/Button'
import { SkewTile } from '@/components/Tile/SkewTile'
import { Text } from '@/components/Typography'
import { css } from '@/styled/css'
import { styled } from '@/styled/jsx'

import { SpotlightsPreview } from './Spotlight'

const Layout = styled('div', {
  base: {
    padding: 'md',
  },
})

const VStack = styled('div', {
  base: {
    alignItems: 'start',
    display: 'flex',
    flexDirection: 'column',
    gap: 'md',
  },
})

export function DiscoverTile() {
  return (
    <SkewTile
      className={css({
        gridColumn: '1/-1',
        sm: {
          gridColumn: '1/span 4',
        },
      })}
      initial="initial"
      shine={false}
      shineClassName={css({
        _dark: {
          mixBlendMode: 'soft-light',
        },
        backgroundColor: '#FFE18D',
        mixBlendMode: 'multiply',
      })}
      whileHover="hover"
    >
      <Layout>
        <VStack>
          <Text display size="md">
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
