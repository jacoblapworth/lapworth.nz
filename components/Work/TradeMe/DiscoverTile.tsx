import { useState } from 'react'

import { AnimatePresence, motion } from 'framer-motion'
import NextLink from 'next/link'

import { PillLink } from '@/components/Button'
import { SkewTile } from '@/components/Tile/SkewTile'
import { Text } from '@/components/Typography'
import { tradeMeTheme } from '@/pages/work/trademe'
import { styled, darkTheme, lightTheme } from '@/styles'

import { SpotlightsPreview } from './Spotlight'

const Tile = styled(motion.div, {
  paddingBlock: '$lg',
  paddingInline: '$md',
  borderRadius: '$lg',

  border: '3px solid transparent',
  '&:hover': {
    borderColor: '#FFC041',
    textDecoration: 'none',
  },
  backgroundColor: '#FFF4D1',
  [`.${darkTheme} &`]: {
    backgroundColor: '#943900',
  },

  display: 'flex',
})

const Layout = styled('div', {
  padding: '$md',
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
        <Text display size="medium">
          Increasing traffic to business verticals on mobile
        </Text>
        <PillLink href="/work/trademe">Discover Trade Me</PillLink>
        {/* <NextLink href="/work/trademe">Discover Trade Me</NextLink> */}
        <SpotlightsPreview />
      </Layout>
    </SkewTile>
  )
}

export default DiscoverTile
