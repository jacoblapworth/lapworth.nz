import { FC } from 'react'

import { styled } from '@/styles'

const StyledTile = styled('div', {
  backgroundColor: '$surface',
  borderRadius: '$lg',
  display: 'grid',
  gridTemplateColumns: 'repeat(12, 1fr)',
  // '@md': {
  //   gridTemplateColumns: 'repeat(12, 1fr)',
  // },
  padding: '1rem',
})

interface TileProps {}

export const Tile: FC<TileProps> = ({ children }) => {
  return <StyledTile>{children}</StyledTile>
}
