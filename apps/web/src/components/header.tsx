import NextLink from 'next/link'

import { ThemeToggle } from '@/components/theme-toggle'
import { styled } from '@/styled/jsx'

const StyledHeader = styled('header', {
  base: {
    alignItems: 'flex-start',
    display: 'flex',
    gridArea: 'header',
    justifyContent: 'space-between',
    padding: 'md',
    zIndex: 20,
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
      <NextLink aria-label="Home" href="/">
        <Text>
          Lapworth,
          <em> Jacob</em>
        </Text>
      </NextLink>
      <ThemeToggle />
    </StyledHeader>
  )
}
