import { styled } from '@/styles'

export const Tile = styled('div', {
  backgroundColor: '$surface',
  borderRadius: '$lg',
  display: 'grid',
  gridTemplateColumns: 'repeat(12, 1fr)',
  // '@md': {
  //   gridTemplateColumns: 'repeat(12, 1fr)',
  // },
  padding: '1rem',
})
