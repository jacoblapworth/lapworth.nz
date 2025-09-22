import useMouse from '@react-hook/mouse-position'
import {
  type MotionValue,
  motion,
  type SpringOptions,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion'
import {
  type ComponentProps,
  type ReactNode,
  type RefObject,
  useEffect,
  useRef,
} from 'react'

import { css, cx } from '@/styled/css'

const SHINE_SIZE = 650

const shineStyles = css({
  _groupHover: {
    opacity: 0.85,
  },
  backgroundColor: '#7ee787',
  borderRadius: '300px',
  filter: 'blur(180px)',
  height: SHINE_SIZE,
  left: 0,
  mixBlendMode: 'soft-light',
  opacity: 0,
  pointerEvents: 'none',
  position: 'absolute',
  top: 0,
  transition: 'opacity 1.2s cubic-bezier(0.16,1,0.3,1)',
  userSelect: 'none',
  width: SHINE_SIZE,
  willChange: 'transform',
  zIndex: -1,
})

const cardStyles = css({
  _dark: {
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  backgroundColor: 'surface',
  borderColor: 'rgba(0, 0, 0, 0.1)',
  borderRadius: 'lg',
  borderStyle: 'solid',
  borderWidth: '1px',
  boxSizing: 'border-box',
  display: 'block',
  overflow: 'hidden',
  padding: '1rem',
  position: 'relative',
  willChange: 'transform',
  zIndex: 1,
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
  const ref = useRef<HTMLDivElement>(null)
  const {
    x: elX,
    y: elY,
    elementWidth: elW,
    elementHeight: elH,
  } = useMouse(ref as RefObject<HTMLDivElement>)

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
    damping: 30,
    stiffness: 200,
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
        damping: 10,
        stiffness: 100,
        type: 'spring',
      }}
      {...rest}
    >
      {children}

      {shine && <Shine className={cx(shineClassName)} x={x} y={y} />}
    </motion.div>
  )
}
