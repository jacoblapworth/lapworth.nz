import { FC, useState } from 'react'

import { ArrowRightIcon } from '@radix-ui/react-icons'
import { motion } from 'framer-motion'
import NextImage from 'next/image'
import NextLink, { LinkProps as NextLinkProps } from 'next/link'

import { styled } from '@/styles'

import Link from '../Link'
import ThemeToggle from '../ThemeToggle'

const A = styled('a', {
  paddingBlock: 8,
  // paddingInline: 8,
  // borderInline: '1px solid $black',
  borderBottom: '1px solid $black',
  display: 'flex',
  justifyContent: 'space-between',

  '&:first-child': {
    borderTop: '1px solid $black',
  },

  '&:hover': {
    backgroundColor: 'rgba(0,0,0,0.05)',
  },
})

const NavLink: FC<NextLinkProps> = ({ children, href }) => {
  // const [rotation, setRotation] = useState(-90)

  const [animate, setAnimate] = useState({ rotate: -90, opacity: 0 })

  const onPointerOver = () => {
    setAnimate({ rotate: 0, opacity: 1 })
  }

  const onPointerLeave = () => {
    setAnimate({ rotate: -90, opacity: 0 })
  }

  return (
    <NextLink href={href} passHref>
      <A onPointerOver={onPointerOver} onPointerLeave={onPointerLeave}>
        {children}
        <motion.div
          animate={animate}
          initial={false}
          style={{ marginInlineEnd: 8 }}
        >
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M13.75 6.75L19.25 12L13.75 17.25"
            ></path>
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M19 12H4.75"
            ></path>
          </svg>

          {/* <ArrowRightIcon /> */}
        </motion.div>
      </A>
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
      <ThemeToggle />
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
