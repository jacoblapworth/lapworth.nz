import { FC, useState } from 'react'

import { motion } from 'framer-motion'
import NextLink, { LinkProps as NextLinkProps } from 'next/link'

import { styled } from '@/styles'

import Link from './Link'

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
  gridColumn: '1 / span 2',
  '@md': {
    borderTop: '1px solid $divider',
  },
  '@sm': {
    gridColumn: 'span 1',
  },
  justifySelf: 'start',
  alignSelf: 'start',

  [`& ul`]: {
    margin: 0,
  },

  [`& li`]: {
    display: 'inline-block',
    whiteSpace: 'pre',
    '&::after': {
      content: ' \u2022 ',
    },
    '&:last-child': {
      '&::after': {
        content: 'none',
      },
    },
  },
})

const socialLinks = [
  {
    name: 'Twitter',
    href: 'https://twitter.com/jacoblapworth',
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/jacoblapworth',
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/jacoblapworth',
  },
  {
    name: 'Github',
    href: 'https://github.com/jacoblapworth',
  },
  {
    name: 'Apple Music',
    href: 'https://music.apple.com/profile/jacoblapworth',
  },
  {
    name: 'Email',
    href: 'mailto:jacob@lapworth.nz',
  },
]

const Description: FC = () => {
  return (
    <Row>
      <ul>
        {socialLinks.map(({ name, href }) => (
          <li key={href}>
            <Link href={href}>{name}</Link>
          </li>
        ))}
      </ul>
    </Row>
  )
}

const Nav = styled('nav', {
  gridArea: 'nav',
  display: 'grid',
  gap: 0,
  gridTemplateColumns: 'repeat(2, 1fr)',
  '@md': {
    gap: 16,
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
