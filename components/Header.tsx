import Link from 'next/link'

import { styled } from '@/styles'

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
      <Link href="/">
        <a aria-label="Home">
          <Text>
            Lapworth,
            <em> Jacob</em>
          </Text>
        </a>
      </Link>
      <ThemeToggle />
    </StyledHeader>
  )
}

export default Header
