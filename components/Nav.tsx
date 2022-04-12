import { FC, useState } from 'react'

import { motion } from 'framer-motion'
import NextLink, { LinkProps as NextLinkProps } from 'next/link'

import { styled } from '@/styles'

import { ArrowIcon } from './Icons'
import Link from './Link'

const A = styled('a', {
  paddingBlock: 8,
  borderBottom: '1px solid $divider',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

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
          <ArrowIcon />
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

const Primary: FC = () => {
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
  justifySelf: 'stretch',
  alignSelf: 'start',

  [`& ul`]: {
    margin: 0,
  },

  [`& li`]: {
    display: 'inline-block',
    whiteSpace: 'pre',
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

const Secondary: FC = () => {
  return (
    <Row>
      <ul aria-label="Social media links">
        {socialLinks.map(({ name, href }, i, arr) => (
          <li key={href}>
            {i !== 0 && <span role="presentation"> • </span>}
            <Link href={href}>{name}</Link>
          </li>
        ))}
      </ul>
    </Row>
  )
}

const Nav = styled('nav', {
  zIndex: 10,
  gridArea: 'nav',
  display: 'grid',
  gap: 0,
  gridTemplateColumns: 'repeat(2, 1fr)',
  '@md': {
    gap: 16,
    gridTemplateColumns: 'repeat(4, 1fr)',
  },
  marginInline: 16,
})

const Navigation: FC = () => {
  return (
    <Nav>
      <Primary />
      <Secondary />
    </Nav>
  )
}

export default Navigation
