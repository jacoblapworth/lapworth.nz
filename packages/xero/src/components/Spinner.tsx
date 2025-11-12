import { useId } from 'react'
import { Box, type HTMLStyledProps, styled } from '@/styled/jsx'

const SVG = styled('svg', {
  base: {
    animationDelay: '0s',
    animationDirection: 'normal',
    animationDuration: '1s',
    animationFillMode: 'none',
    animationIterationCount: 'infinite',
    animationName: 'spin',
    animationPlayState: 'running',
    animationRangeEnd: 'normal',
    animationRangeStart: 'normal',
    animationTimeline: 'auto',
    animationTimingFunction: 'linear',
    fill: 'none',
  },
})

const sizeMap = {
  lg: '32px',
  md: '24px',
  sm: '16px',
} as const

interface Props extends HTMLStyledProps<typeof Box> {
  /** Sets the width and height of the spinner. */
  size?: keyof typeof sizeMap
  /** Sets the text conveyed by assistive technologies such as screen readers. Set to `null` if the loading state is displayed in a text node somewhere else on the page. */
  srText?: string | null
}

export function Spinner({
  size: sizeKey = 'md',
  srText = 'Loading',
  ...props
}: Props) {
  const size = sizeMap[sizeKey]
  const hasHiddenLabel = !!srText
  const labelId = useId()

  return (
    <Box display="inline-flex" height="100%" padding={2} {...props}>
      <SVG
        aria-hidden
        aria-labelledby={hasHiddenLabel ? labelId : undefined}
        viewBox="0 0 16 16"
      >
        <circle
          cx="8"
          cy="8"
          r="7"
          stroke="currentColor"
          strokeOpacity="0.25"
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M15 8a7.002 7.002 0 00-7-7"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
        />
      </SVG>
      {hasHiddenLabel ? (
        <Box id={labelId} srOnly>
          {srText}
        </Box>
      ) : null}
    </Box>
  )
}
