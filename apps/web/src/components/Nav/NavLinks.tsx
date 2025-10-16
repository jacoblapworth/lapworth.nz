'use client'

import { motion } from 'motion/react'
import { ArrowRightIcon } from 'lucide-react'
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

export function NavLinks({ enableFood }: { enableFood?: boolean } = {}) {
  const pathname = usePathname()
  const showFood = enableFood || pathname?.startsWith('/food')

  return (
    <Stack>
      <NavLink href="/work">Work</NavLink>
      {showFood ? <NavLink href="/food">Food</NavLink> : null}
      <NavLink href="/about">About</NavLink>
    </Stack>
  )
}
