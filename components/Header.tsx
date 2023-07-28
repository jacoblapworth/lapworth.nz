import NextLink from 'next/link'

import { ThemeToggle } from '@/components/ThemeToggle'
import { styled } from '@/styled-system/jsx'

const StyledHeader = styled('header', {
  base: {
    zIndex: 20,
    gridArea: 'header',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    padding: 'md',
  },
})

const Text = styled('div', {
  base: {
    fontWeight: '500',
  },
})

export const Header = () => {
  return (
    <StyledHeader aria-label="Header">
      <NextLink href="/" aria-label="Home">
        <Text>
          Lapworth,
          <em> Jacob</em>
        </Text>
      </NextLink>
      <ThemeToggle />
    </StyledHeader>
  )
}
