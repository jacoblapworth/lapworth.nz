import { useState } from 'react'

import { AnimatePresence, motion } from 'framer-motion'
import NextLink from 'next/link'

import { Text } from '@/components/Typography'
import { tradeMeTheme } from '@/pages/work/trademe'
import { styled, darkTheme, lightTheme } from '@/styles'

import { SpotlightsPreview } from './Spotlight'

const Tile = styled(NextLink, {
  paddingBlock: '$lg',
  paddingInline: '$md',
  borderRadius: '$lg',
  gridColumn: '1/ span 4',
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

interface DiscoverTileProps {}

export function DiscoverTile({}: DiscoverTileProps) {
  const [isHover, setIsHover] = useState(false)
  return (
    <Tile
      href="/work/trademe"
      className={tradeMeTheme}
      onPointerEnter={() => setIsHover(true)}
      onPointerLeave={() => setIsHover(false)}
    >
      <Text display size="medium">
        Discover for Trade Me mobile
      </Text>
      <SpotlightsPreview isHover={isHover} />
    </Tile>
  )
}

export default DiscoverTile
