import { useState, ComponentProps } from 'react'

import { motion } from 'framer-motion'
import NextLink from 'next/link'
import { useRouter } from 'next/router'

import { Link } from '@/components/Link'
import { styled } from '@/styles'

type NextLinkProps = ComponentProps<typeof NextLink>

const A = styled(NextLink, {
  $$highlightWidth: '20px',
  paddingBlock: 8,
  borderBottom: '1px solid $divider',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'relative',
  textDecoration: 'none',

  '&::after': {
    content: '',
    position: 'absolute',
    bottom: 0,
    left: 0,
    height: '2px',
    width: '0px',
    backgroundColor: '$divider',
    transition: 'width 0.1s ease-in-out',
  },

  '&:first-child': {
    borderTop: '1px solid $divider',
  },

  '&:hover': {
    backgroundColor: '$surfaceHovered',
    textDecoration: 'none',

    '&::after': {
      width: '$$highlightWidth',
    },
  },

  variants: {
    isActive: {
      true: {
        '&::after': {
          width: '$$highlightWidth',
        },
      },
    },
  },
})

const NavLink = ({ children, href }: NextLinkProps) => {
  const [animate, setAnimate] = useState('hidden')
  const router = useRouter()

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

  const isActive = router.pathname.startsWith(href.toString())

  return (
    <A
      href={href}
      onPointerOver={onPointerOver}
      onPointerLeave={onPointerLeave}
      isActive={isActive}
    >
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
  )
}

const Stack = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gridColumn: '1 / span 2',
})

const NavLinks = () => {
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

  [`& a`]: {
    padding: '$sm',
    margin: '-$sm',
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
  {
    name: 'CV',
    href: 'https://read.cv/jacoblapworth',
  },
]

const Description = () => {
  return (
    <Row>
      <ul aria-label="Social media links">
        {socialLinks.map(({ name, href }, i) => (
          <li key={href}>
            <Link href={href}>{name}</Link>
            {i !== socialLinks.length - 1 && (
              <span aria-hidden="true">{` \u2022 `}</span>
            )}
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
})

export const Navigation = () => {
  return (
    <Nav>
      <NavLinks />
      <Description />
    </Nav>
  )
}
