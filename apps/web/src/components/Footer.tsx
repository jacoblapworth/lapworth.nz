import { styled } from '@/styled/jsx'
import { Link } from './Link'

const Tagline = styled('footer', {
  base: {
    borderTop: 'divider',
    color: 'tertiary',
    fontSize: 'sm',
    gridArea: 'footer',
    marginBottom: 'env(safe-area-inset-bottom)',
    marginInline: '16px',
    paddingBlockEnd: '12px',
    paddingBlockStart: '8px',
  },
})

export const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <Tagline>
      Designed and{' '}
      <Link href="https://github.com/jacoblapworth/lapworth.nz">built</Link> by
      J — Product Designer — {year}
    </Tagline>
  )
}
