import { ComponentProps, ReactNode, useEffect, useRef } from 'react'

import useMouse from '@react-hook/mouse-position'
import {
  motion,
  SpringOptions,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion'

import { darkTheme, styled } from '@/styles'

const SHINE_SIZE = 650

const Shine = styled(motion.div, {
  position: 'absolute',
  width: SHINE_SIZE,
  height: SHINE_SIZE,
  backgroundColor: '#7ee787',
  filter: 'blur(180px)',
  borderRadius: '300px',
  opacity: 0,
  transition: 'opacity 1.2s cubic-bezier(0.16,1,0.3,1)',
  mixBlendMode: 'soft-light',
  willChange: 'transform',
  zIndex: -1,
  top: 0,
  left: 0,
})

const Card = styled(motion.div, {
  backgroundColor: '$surface',
  borderRadius: '$lg',
  borderColor: 'rgba(0, 0, 0, 0.1)',
  borderWidth: '1px',
  borderStyle: 'solid',
  padding: '1rem',
  overflow: 'hidden',
  display: 'block',
  zIndex: 1,
  position: 'relative',
  willChange: 'transform',
  boxSizing: 'border-box',

  [`.${darkTheme} &`]: {
    // backgroundColor: '',
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },

  '&:hover': {
    [`& ${Shine}`]: {
      opacity: 0.85,
    },
  },
})

type CardProps = ComponentProps<typeof Card>

interface Props extends CardProps {
  children: ReactNode
  shine?: boolean
  shineCss?: ComponentProps<typeof Shine>['css']
}

export const SkewTile = ({
  children,
  shine = true,
  shineCss,
  ...rest
}: Props) => {
  const ref = useRef(null)
  const {
    x: elX,
    y: elY,
    elementWidth: elW,
    elementHeight: elH,
  } = useMouse(ref)

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const x1 = useMotionValue(0)
  const y1 = useMotionValue(0)

  useEffect(() => {
    elX && x.set(elX)
    elY && y.set(elY)
    x1.set(elX ?? 0.5)
    y1.set(elY ?? 0.5)
  }, [x, y, x1, y1, elX, elY])

  const config: SpringOptions = {
    stiffness: 200,
    damping: 30,
  }

  const shineTransform = (v: number) => v - SHINE_SIZE / 2
  const rotateX = useSpring(useTransform(y1, [0, elH ?? 1], [-1, 1]), config)
  const rotateY = useSpring(
    useTransform(x1, [0, elW ?? 1], [1.5, -1.5]),
    config,
  )
  const shineX = useTransform(x, shineTransform)
  const shineY = useTransform(y, shineTransform)

  return (
    <Card
      ref={ref}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 700,
      }}
      initial={{
        rotateX: 0,
        rotateY: 0,
      }}
      transition={{
        type: 'spring',
        damping: 10,
        stiffness: 100,
      }}
      {...rest}
    >
      {children}

      {shine && (
        <Shine
          css={shineCss}
          style={{
            x: shineX,
            y: shineY,
          }}
        />
      )}
    </Card>
  )
}
