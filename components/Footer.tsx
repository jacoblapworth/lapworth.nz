import { styled } from '@/styled-system/jsx'

const Tagline = styled('footer', {
  base: {
    gridArea: 'footer',
    paddingBlockStart: '8px',
    paddingBlockEnd: '12px',
    borderTop: 'divider',
    fontSize: 'sm',
    color: 'tertiary',
    marginInline: '16px',
    marginBottom: 'env(safe-area-inset-bottom)',
  },
})

export const Footer = () => {
  return <Tagline>Designed and built by J — Product Designer — 2022</Tagline>
}
