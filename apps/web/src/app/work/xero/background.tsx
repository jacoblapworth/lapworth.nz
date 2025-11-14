'use client'

import useMouse from '@react-hook/mouse-position'
import { motion, useMotionValue } from 'motion/react'
import { type RefObject, useEffect, useRef } from 'react'

import { Shine } from '@/components/tile/skew-tile'
import { css } from '@/styled/css'
import { styled } from '@/styled/jsx'

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

export function Background() {
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
          backgroundColor: '#BBF3FD',
          opacity: 0.8,
        })}
        x={x}
        y={y}
      />
    </Container>
  )
}
