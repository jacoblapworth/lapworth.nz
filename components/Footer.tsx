import { FC, PropsWithChildren } from 'react'

import { styled } from '@/styles/stitches.config'

const Tagline = styled('footer', {
  gridArea: 'footer',
  paddingBlockStart: 8,
  paddingBlockEnd: 12,
  borderTop: '1px solid $divider',
  fontSize: '$sm',
  color: '$tertiary',
  marginInline: 16,
  marginBottom: 'env(safe-area-inset-bottom)',
})

interface FooterProps {}

export const Footer: FC<PropsWithChildren<FooterProps>> = ({}) => {
  return <Tagline>Designed and built by J — Product Designer — 2022</Tagline>
}

export default Footer
