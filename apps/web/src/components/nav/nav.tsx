import { styled } from '@/styled/jsx'
import { NavLinks } from './nav-links'
import { SecondaryLinks } from './nav-secondary-links'

const Nav = styled('nav', {
  base: {
    display: 'grid',
    gap: 0,
    gridArea: 'nav',
    gridTemplateColumns: 'repeat(2, 1fr)',
    marginInline: 16,
    md: {
      gap: 16,
      gridTemplateColumns: 'repeat(4, 1fr)',
    },
  },
})

export async function Navigation() {
  return (
    <Nav>
      <NavLinks />
      <SecondaryLinks />
    </Nav>
  )
}
