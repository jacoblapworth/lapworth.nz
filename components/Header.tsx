import Link from 'next/link'

import { styled } from '@/styles/stitches.config'

import ThemeToggle from './ThemeToggle'

const StyledHeader = styled('header', {
  gridArea: 'header',
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  padding: '$md',
})

const Text = styled('div', {
  fontWeight: 500,
})

const Header = () => {
  return (
    <StyledHeader aria-label="Header">
      <Link href="/" aria-label="Home">
        <Text>
          Lapworth,
          <em> Jacob</em>
        </Text>
      </Link>
      <ThemeToggle />
    </StyledHeader>
  )
}

export default Header
