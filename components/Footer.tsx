import { FC } from 'react'

import { styled } from '@/styles'

const Tagline = styled('footer', {
  paddingBlock: '8px',
  borderTop: '1px solid $divider',
  fontSize: '$sm',
  color: '$tertiary',
  marginInline: 16,
})

interface FooterProps {}

export const Footer: FC<FooterProps> = ({}) => {
  return (
    <Tagline>
      Designed and built by Jacob Lapworth — Product Designer — 2021
    </Tagline>
  )
}

export default Footer
