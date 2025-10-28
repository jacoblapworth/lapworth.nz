'use client'

import { ArrowRightIcon } from 'lucide-react'
import { motion } from 'motion/react'
import type { Route } from 'next'
import NextLink, { type LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'
import { type ReactNode, useState } from 'react'
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
    paddingInlineEnd: 8,
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
  href: Route
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
      <motion.div animate={animate} initial="hidden" variants={variants}>
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

interface NavLink<T extends string = string> {
  href: T
  name: string
}

export function NavLinks() {
  const links: NavLink<Route>[] = [
    { href: '/work', name: 'Work' },
    { href: '/food', name: 'Food' },
    { href: '/about', name: 'About' },
  ]

  return (
    <Stack>
      {links.map(({ href, name }) => (
        <NavLink href={href} key={href}>
          {name}
        </NavLink>
      ))}
    </Stack>
  )
}
