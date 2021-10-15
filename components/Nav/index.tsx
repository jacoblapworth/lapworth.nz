import NextLink, { LinkProps as NextLinkProps } from 'next/link'
import { styled } from '@/styles'
import { FC } from 'react'
import Link from '../Link'

const A = styled('a', {
  paddingBlock: 8,
  // paddingInline: 8,
  // borderInline: '1px solid $black',
  borderBottom: '1px solid $black',

  '&:first-child': {
    borderTop: '1px solid $black',
  },

  '&:hover': {
    backgroundColor: 'rgba(0,0,0,0.05)',
  },
})

const NavLink: FC<NextLinkProps> = ({ children, href }) => {
  return (
    <NextLink href={href} passHref>
      <A>{children}</A>
    </NextLink>
  )
}

const Stack = styled('div', {
  display: 'grid',
  gridColumn: '1 / span 2',
})

const NavLinks: FC = () => {
  return (
    <Stack>
      <NavLink href="/work">Work</NavLink>
      <NavLink href="/about">About</NavLink>
      <NavLink href="/contact">Contact</NavLink>
    </Stack>
  )
}

const Row = styled('div', {
  fontSize: 13,
  paddingBlock: 8,
  borderBottom: '1px solid $black',
  '&:first-child': {
    borderTop: '1px solid $black',
  },
})

const Description: FC = () => {
  return (
    <div>
      <Row>
        <Link href="https://twitter.com/jacoblapworth">Twitter</Link> ∙{' '}
        <Link href="https://instagram.com/jacoblapworth">Instagram</Link> ∙{' '}
        <Link href="https://linkedin.com/in/jacoblapworth">LinkedIn</Link> ∙{' '}
        <Link href="https://github.com/jacoblapworth">Github</Link> ∙{' '}
        <Link href="https://music.apple.com/profile/jacoblapworth">
          Apple Music
        </Link>
      </Row>
    </div>
  )
}

const Grid = styled('div', {
  display: 'grid',
  gap: 16,
  gridTemplateColumns: 'repeat(2, 1fr)',
  '@md': {
    gridTemplateColumns: 'repeat(4, 1fr)',
  },
  // marginInline: 16,
  marginBlockEnd: 16,
})

const Nav: FC = () => {
  return (
    <Grid>
      <NavLinks />
      <Description />
    </Grid>
  )
}

export default Nav
