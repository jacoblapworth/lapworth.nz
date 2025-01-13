import {
  ComponentProps,
  ReactNode,
  useEffect,
  useRef,
  type RefObject,
} from 'react'

import useMouse from '@react-hook/mouse-position'
import {
  motion,
  MotionValue,
  SpringOptions,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion'

import { cx, css } from 'styled/css'

const SHINE_SIZE = 650

const shineStyles = css({
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
  userSelect: 'none',
  pointerEvents: 'none',

  _groupHover: {
    opacity: 0.85,
  },
})

const cardStyles = css({
  backgroundColor: 'surface',
  borderRadius: 'lg',
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

  _dark: {
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
})

interface ShineProps {
  size?: number
  x: MotionValue<number>
  y: MotionValue<number>
  className?: string
}

export const Shine = ({
  size = 650,
  x,
  y,
  className,
  ...props
}: ShineProps) => {
  const shineTransform = (v: number) => v - size / 2
  const shineX = useTransform(x, shineTransform)
  const shineY = useTransform(y, shineTransform)

  return (
    <motion.div
      className={cx(shineStyles, className)}
      style={{
        x: shineX,
        y: shineY,
      }}
      {...props}
    />
  )
}

interface Props extends ComponentProps<typeof motion.div> {
  children: ReactNode
  shine?: boolean
  className?: string
  shineClassName?: string
}

export const SkewTile = ({
  children,
  shine = true,
  className,
  shineClassName,
  ...rest
}: Props) => {
  const ref = useRef<HTMLElement>(null)
  const {
    x: elX,
    y: elY,
    elementWidth: elW,
    elementHeight: elH,
  } = useMouse(ref as RefObject<HTMLElement>)

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const x1 = useMotionValue(0)
  const y1 = useMotionValue(0)

  useEffect(() => {
    if (elX) x.set(elX)
    if (elY) y.set(elY)
    x1.set(elX ?? 0.5)
    y1.set(elY ?? 0.5)
  }, [x, y, x1, y1, elX, elY])

  const config: SpringOptions = {
    stiffness: 200,
    damping: 30,
  }

  const rotateX = useSpring(useTransform(y1, [0, elH ?? 1], [-1, 1]), config)
  const rotateY = useSpring(
    useTransform(x1, [0, elW ?? 1], [1.5, -1.5]),
    config,
  )

  return (
    <motion.div
      className={cx('group', cardStyles, className)}
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

      {shine && <Shine className={cx(shineClassName)} x={x} y={y} />}
    </motion.div>
  )
}
