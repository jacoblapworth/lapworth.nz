import { FC, useState } from 'react'

import { motion } from 'framer-motion'
import NextLink, { LinkProps as NextLinkProps } from 'next/link'

import { styled } from '@/styles'

import Link from '../Link'

const A = styled('a', {
  paddingBlock: 8,
  borderBottom: '1px solid $divider',
  display: 'flex',
  justifyContent: 'space-between',

  '&:first-child': {
    borderTop: '1px solid $divider',
  },

  '&:hover': {
    backgroundColor: '$surfaceHovered',
  },
})

const NavLink: FC<NextLinkProps> = ({ children, href }) => {
  const [animate, setAnimate] = useState('hidden')

  const variants = {
    visible: { rotate: 0, opacity: 1 },
    hidden: { rotate: -90, opacity: 0 },
  }

  const onPointerOver = () => {
    setAnimate('visible')
  }

  const onPointerLeave = () => {
    setAnimate('hidden')
  }

  return (
    <NextLink href={href} passHref>
      <A onPointerOver={onPointerOver} onPointerLeave={onPointerLeave}>
        {children}
        <motion.div
          variants={variants}
          animate={animate}
          initial="hidden"
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
        </motion.div>
      </A>
    </NextLink>
  )
}

const Stack = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gridColumn: '1 / span 2',
})

const NavLinks: FC = () => {
  return (
    <Stack>
      <NavLink href="/work">Work</NavLink>
      <NavLink href="/about">About</NavLink>
    </Stack>
  )
}

const Row = styled('div', {
  fontSize: 13,
  paddingBlock: 8,
  borderBottom: '1px solid $divider',
  '&:first-child': {
    borderTop: '1px solid $divider',
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

const Nav = styled('nav', {
  display: 'grid',
  gap: 16,
  gridTemplateColumns: 'repeat(2, 1fr)',
  '@md': {
    gridTemplateColumns: 'repeat(4, 1fr)',
  },
  marginInline: 16,
  marginBlockEnd: 16,
})

const Navigation: FC = () => {
  return (
    <Nav>
      <NavLinks />
      <Description />
    </Nav>
  )
}

export default Navigation
