'use client'

import { motion } from 'framer-motion'
import { ArrowRightIcon } from 'lucide-react'
import NextLink, { type LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'
import { type ReactNode, useState } from 'react'
import { Link } from '@/components/Link'
import { styled } from '@/styled/jsx'

const A = styled(NextLink, {
  base: {
    _after: {
      backgroundColor: 'divider',
      bottom: 0,
      content: '""',
      height: '2px',
      left: 0,
      position: 'absolute',
      transition: 'width 0.1s ease-in-out',
      width: '0px',
    },

    _first: {
      borderTop: 'divider',
    },

    _hover: {
      _after: {
        width: 'var(--highlight-width)',
      },
      backgroundColor: 'surfaceHovered',
      textDecoration: 'none',
    },
    '--highlight-width': '20px',
    alignItems: 'center',
    borderBottom: 'divider',
    display: 'flex',
    justifyContent: 'space-between',
    paddingBlock: 8,
    position: 'relative',
    textDecoration: 'none',
  },
  variants: {
    isActive: {
      true: {
        _after: {
          width: 'var(--highlight-width)',
        },
      },
    },
  },
})

interface Props extends LinkProps {
  href: string
  children: ReactNode
}

const NavLink = ({ children, href }: Props) => {
  const [animate, setAnimate] = useState('hidden')
  const pathname = usePathname()

  const variants = {
    hidden: { opacity: 0, rotate: -90 },
    visible: { opacity: 1, rotate: 0 },
  }

  const onPointerOver = () => {
    setAnimate('visible')
  }

  const onPointerLeave = () => {
    setAnimate('hidden')
  }

  const isActive = pathname?.startsWith(href)

  return (
    <A
      href={href}
      isActive={isActive}
      onPointerLeave={onPointerLeave}
      onPointerOver={onPointerOver}
    >
      {children}
      <motion.div
        animate={animate}
        initial="hidden"
        style={{ marginInlineEnd: 8 }}
        variants={variants}
      >
        <ArrowRightIcon />
      </motion.div>
    </A>
  )
}

const Stack = styled('div', {
  base: {
    display: 'flex',
    flexDirection: 'column',
    gridColumn: '1 / span 2',
  },
})

const NavLinks = () => {
  const pathname = usePathname()
  const isRecipes = pathname?.startsWith('/recipes')

  return (
    <Stack>
      <NavLink href="/work">Work</NavLink>
      {isRecipes ? <NavLink href="/recipes">Recipes</NavLink> : null}
      <NavLink href="/about">About</NavLink>
    </Stack>
  )
}

const Row = styled('div', {
  base: {
    '& a': {
      margin: '-xsm',
      padding: 'xsm',
    },

    '& li': {
      display: 'inline-block',
      whiteSpace: 'pre',
    },

    '& ul': {
      lineHeight: '1.4rem',
      margin: 0,
    },
    alignSelf: 'start',
    borderBottom: '1px solid token(colors.divider)',
    fontSize: 13,
    gridColumn: '1 / span 2',
    justifySelf: 'stretch',
    md: {
      borderTop: '1px solid token(colors.divider)',
    },
    paddingBlock: 8,
    sm: {
      gridColumn: 'span 1',
    },
  },
})

const socialLinks = [
  {
    href: 'https://twitter.com/jacoblapworth',
    name: 'Twitter',
  },
  {
    href: 'https://instagram.com/jacoblapworth',
    name: 'Instagram',
  },
  {
    href: 'https://linkedin.com/in/jacoblapworth',
    name: 'LinkedIn',
  },
  {
    href: 'https://github.com/jacoblapworth',
    name: 'Github',
  },
  {
    href: 'https://music.apple.com/profile/jacoblapworth',
    name: 'Apple Music',
  },
  {
    href: 'mailto:jacob@lapworth.nz',
    name: 'Email',
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
  base: {
    display: 'grid',
    gap: 0,
    gridArea: 'nav',
    gridTemplateColumns: 'repeat(2, 1fr)',
    marginInline: 16,
    md: {
      gap: 16,
      gridTemplateColumns: 'repeat(4, 1fr)',
    },
  },
})

export const Navigation = () => {
  return (
    <Nav>
      <NavLinks />
      <Description />
    </Nav>
  )
}
