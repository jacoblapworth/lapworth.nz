'use client'

import useMouse from '@react-hook/mouse-position'
import { motion, useMotionValue } from 'framer-motion'
import NextImage, { type StaticImageData } from 'next/image'
import NextLink from 'next/link'
import { type RefObject, useEffect, useRef } from 'react'

import { Shine } from '@/components/Tile/SkewTile'
import { Text } from '@/components/Typography'
import xuiLogo from '@/public/work/xero/xui-logo.svg'
import figmaPlugin from '@/public/work/xero/xui-plugin-cover.png'
import { css } from '@/styled/css'
import { styled } from '@/styled/jsx'

const Grid = styled('div', {
  base: {
    display: 'grid',
    gap: 'md',
    marginBlock: 'md',
  },
})

const Link = styled(NextLink, {
  base: {
    '&:hover': {
      textDecorationColor: 'interactive',
    },
    textDecorationColor: 'quaternary',
    textDecorationLine: 'underline',
  },
})

const Logo = styled(NextImage, {
  base: {
    borderRadius: 8,
    display: 'inline',
    height: '1em',
    width: 'auto',
  },
})

const Thumbnail = styled(NextImage, {
  base: {
    height: 'auto',
    maxWidth: 300,
    width: '100%',
  },
})

const Container = styled(motion.div, {
  base: {
    inset: 0,
    pointerEvents: 'none',
    position: 'absolute',
    // backgroundColor: 'gray',
    // zIndex: -1,
    userSelect: 'none',
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
      <Text as="h1" display size="lg">
        Xero User Interface
        <Logo alt="XUI logo" src={xuiLogo as StaticImageData} />
      </Text>
      <Text display size="md">
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
        <Thumbnail alt="" src={figmaPlugin} />
        <Link href="/work/xero/figma-plugin">
          Bringing documentation and tools to Figma
        </Link>

        <Link href="/work/xero/forms">Ethical form design</Link>
      </Grid>
    </>
  )
}
