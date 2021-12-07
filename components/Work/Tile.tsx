import { FC } from 'react'

import { styled } from '@/styles'

const StyledTile = styled('div', {
  backgroundColor: '#fff',
  borderRadius: '30px',
  boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  padding: '1rem',
  width: '100%',
})

interface TileProps {}

const Tile: FC<TileProps> = ({ children }) => {
  return <StyledTile>{children}</StyledTile>
}

export default Tile
