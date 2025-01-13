'use client'
import { useEffect, useRef, type RefObject } from 'react'

import useMouse from '@react-hook/mouse-position'
import { motion, useMotionValue } from 'framer-motion'
import NextImage, { StaticImageData } from 'next/image'
import NextLink from 'next/link'

import { css } from 'styled/css'
import { styled } from 'styled/jsx'

import { Shine } from '@/components/Tile/SkewTile'
import { Text } from '@/components/Typography'
import figmaPlugin from '@/public/static/work/xero/plugin/xui-plugin-cover.png'
import xuiLogo from '@/public/static/work/xero/xui-logo.svg'

const Grid = styled('div', {
  base: {
    display: 'grid',
    marginBlock: 'md',
    gap: 'md',
  },
})

const Link = styled(NextLink, {
  base: {
    textDecorationLine: 'underline',
    textDecorationColor: 'quaternary',

    '&:hover': {
      textDecorationColor: 'interactive',
    },
  },
})

const Logo = styled(NextImage, {
  base: {
    display: 'inline',
    borderRadius: 8,
    height: '1em',
    width: 'auto',
  },
})

const Thumbnail = styled(NextImage, {
  base: {
    width: '100%',
    maxWidth: 300,
    height: 'auto',
  },
})

const Container = styled(motion.div, {
  base: {
    position: 'absolute',
    inset: 0,
    // backgroundColor: 'gray',
    // zIndex: -1,
    userSelect: 'none',
    pointerEvents: 'none',
  },
})

const Background = () => {
  const ref = useRef<HTMLDivElement>(null)
  const { screenX, screenY } = useMouse(ref as RefObject<HTMLElement>)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  useEffect(() => {
    if (screenX) x.set(screenX)
    if (screenY) y.set(screenY)
  }, [x, y, screenX, screenY])

  return (
    <Container ref={ref}>
      <Shine
        className={css({
          bg: '#BBF3FD',
          opacity: 0.8,
        })}
        x={x}
        y={y}
      />
    </Container>
  )
}

export default function Page() {
  return (
    <>
      <Background />
      <Text
        as="h1"
        display
        size="large"
        // css={{ display: 'flex', gap: 'md', marginBlockEnd: 'sm' }}
      >
        Xero User Interface
        <Logo src={xuiLogo as StaticImageData} alt="XUI logo" />
      </Text>
      <Text display size="medium">
        Design system for beautiful business
      </Text>

      <p>
        XUI (Xero User Interface) is the design system at Xero used by 200
        designers and 800 engineers to create #beautiful, accessible,
        predictable and modern experiences for all 3.5 million Xero users.
      </p>
      <Grid>
        <Link href="/work/xero/flexibility">
          Navigating flexibility in the design system
        </Link>
        <Link href="/work/xero/deconstructing-intent">
          Deconstructing the intent of your design
        </Link>
        <Link href="/work/xero/principles">
          Experience design principles for cohesive decision making
        </Link>
        <Thumbnail src={figmaPlugin} alt="" />
        <Link href="/work/xero/figma-plugin">
          Bringing documentation and tools to Figma
        </Link>

        <Link href="/work/xero/forms">Ethical form design</Link>
      </Grid>
    </>
  )
}
