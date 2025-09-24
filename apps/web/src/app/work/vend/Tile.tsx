'use client'

import { PillLink } from '@/components/Button'
import { SkewTile } from '@/components/Tile'
import { Text } from '@/components/Typography'
import { css } from '@/styled/css'
import { styled } from '@/styled/jsx'

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

export function VendTabsTile() {
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
      whileHover="hover"
    >
      <Layout>
        <VStack>
          <Text display size="md">
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
