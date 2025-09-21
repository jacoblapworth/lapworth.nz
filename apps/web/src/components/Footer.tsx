import { styled } from '@/styled/jsx'
import { Link } from './Link'

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
  const year = new Date().getFullYear()

  return (
    <Tagline>
      Designed and{' '}
      <Link href="https://github.com/jacoblapworth/lapworth.nz">built</Link> by
      J — Product Designer — {year}
    </Tagline>
  )
}
