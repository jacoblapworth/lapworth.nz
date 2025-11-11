import { interpolate } from 'flubber'
import { type MotionValue, motion, useTransform } from 'motion/react'
import {
  Children,
  type ComponentPropsWithoutRef,
  type HTMLProps,
  isValidElement,
  type ReactNode,
  type ReactSVGElement,
} from 'react'

/**
 * Custom hook that creates smooth morphing animations between SVG paths using flubber interpolation.
 *
 * @param progress - A Framer Motion MotionValue representing the animation progress (0 to 1)
 * @param paths - An array of SVG path strings to morph between
 * @returns A MotionValue that interpolates between the provided paths with smooth transitions
 *
 * @example
 * ```tsx
 * const progress = useMotionValue(0);
 * const paths = ['M10,10 L20,20', 'M15,15 L25,25'];
 * const morphedPath = useFlubber(progress, paths);
 * ```
 */
export function useFlubber(progress: MotionValue<number>, paths: string[]) {
  const indices = paths.map((_, index) => index)
  return useTransform(progress, indices, paths, {
    mixer: (a, b) => interpolate(a, b, { maxSegmentLength: 0.1 }),
  })
}

function isReactSVGElement(element: ReactNode): element is ReactSVGElement {
  return isValidElement(element) && element.type === 'path'
}

function extractPathData(children: ReactNode): string[] {
  return Children.toArray(children)
    .filter(isReactSVGElement)
    .map((child) => child.props.d)
    .filter(Boolean)
}

interface Props extends ComponentPropsWithoutRef<'svg'> {
  children: ReactNode
  progress: MotionValue<number>
}

/**
 * Animated SVG path using Flubber morphing.
 *
 * @param children - <path> elements containing path data
 * @param progress - Animation progress value (typically 0-1) that determines the current morphing state
 * @returns An animated SVG element with a morphing path
 * @example
 * ```tsx
 * <SVGFlubber progress={progressValue}>
 *   <path d="M10,10 L20,20" />
 *   <path d="M15,15 L25,25" />
 * </SVGFlubber>
 * ```
 */
export function SVGFlubber({ children, progress, ...props }: Props) {
  const paths = extractPathData(children)
  const path = useFlubber(progress, paths)

  return (
    <svg role="presentation" {...props}>
      <motion.path d={path} fill="currentColor" />
    </svg>
  )
}
