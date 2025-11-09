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

const Text = styled(NextLink, {
  base: {
    _hover: {
      textDecoration: 'underline',
      textDecorationColor: 'quaternary',
    },
    fontWeight: '500',
  },
})

export const Header = () => {
  return (
    <StyledHeader aria-label="Header">
      <Text aria-label="Home" href="/">
        Lapworth,
        <em> Jacob</em>
      </Text>
      <ThemeToggle />
    </StyledHeader>
  )
}
