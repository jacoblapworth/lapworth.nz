import { Text } from '@/components/Typography'
import { styled } from '@/styled/jsx'

import { SearchIcon } from './Icons'
import { Spotlights } from './Spotlight'

const Header = styled('div', {
  base: {
    _dark: {
      backgroundColor: 'hokey-pokey.900',
    },
    // marginTop: -200,
    // paddingTop: 200,
    backgroundColor: 'hokey-pokey',
    padding: 16,
  },
})

const StyledSearchBar = styled('div', {
  base: {
    backgroundColor: '#fff',
    borderColor: 'transparent',
    borderRadius: 'sm',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    position: 'relative',
    width: '100%',
  },
})

const StyledInputIcon = styled('div', {
  base: {
    alignItems: 'center',
    display: 'flex',
    height: 32,
    justifyContent: 'center',
    left: 0,
    position: 'absolute',
    top: 0,
    width: 32,
  },
})

const StyledSearchInput = styled('input', {
  base: {
    appearance: 'none',
    border: 'none',
    borderRadius: 'sm',
    padding: 8,
    paddingInlineStart: 40,
    position: 'relative',
    width: '100%',
  },
})

const SearchBar = () => {
  return (
    <StyledSearchBar>
      <StyledInputIcon>
        <SearchIcon />
      </StyledInputIcon>
      <StyledSearchInput placeholder="Search all of Trade Me" />
    </StyledSearchBar>
  )
}

const Container = styled('div', {
  base: {
    marginInline: -16,
  },
})

const TextContainer = styled('p', {
  base: {
    cursor: 'auto',
    marginInline: 16,
  },
})

const Discover = () => {
  return (
    <Container>
      <Header>
        <Text as="h1" display size="lg">
          Discover for Trade Me mobile
        </Text>
        <SearchBar />
      </Header>
      <Spotlights />
      <TextContainer>
        Trade Me is Aotearoa&apos;s (New Zealand) largest and most popular
        community for buying and selling used and new goods. It&apos;s origins
        started in selling second-hand goods but has expanded into other
        verticals, with Jobs, Property and Motors. Sell your house, buy a
        vintage car, find a new job, do it all on Trade Me.
        <br />
        As these verticals have expanded, Trade Me has struggled to This legacy
        of
      </TextContainer>
      <Text as="h2" display size="lg">
        Opportunity
      </Text>
    </Container>
  )
}

export default Discover
