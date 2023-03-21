import { FC } from 'react'

import { styled } from '@/styles'

import { SearchIcon } from './Icons'
import Spotlights from './Spotlight'

const Header = styled('div', {
  padding: 16,
  marginTop: -200,
  paddingTop: 200,
  backgroundColor: '$hokeyPokey',
})

const StyledSearchBar = styled('div', {
  display: 'flex',
  width: '100%',
  position: 'relative',

  borderColor: 'transparent',
  borderRadius: '$sm',

  backgroundColor: '#fff',
  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
})

const StyledInputIcon = styled('div', {
  left: 0,
  top: 0,
  width: 32,
  height: 32,
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

const StyledSearchInput = styled('input', {
  width: '100%',
  border: 'none',
  position: 'relative',
  borderRadius: '$sm',
  padding: 8,
  paddingInlineStart: 40,
  appearance: 'none',
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

const H1 = styled('h1', {
  color: '#fff',
})

const Container = styled('div', {
  marginInline: -16,
})

const TextContainer = styled('div', {
  marginInline: 16,
  cursor: 'auto',
})

interface DiscoverProps {}

const Discover: FC<DiscoverProps> = ({}) => {
  return (
    <Container>
      <Header>
        <H1>Trade Me</H1>
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
        <h3>Opportunity</h3>
      </TextContainer>
    </Container>
  )
}

export default Discover
