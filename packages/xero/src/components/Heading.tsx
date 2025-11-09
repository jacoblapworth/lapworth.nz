import * as Ariakit from '@ariakit/react'
import { styled } from '@/stylex'
import { textStyles } from '@/stylex/textStyles'

export const Heading = styled(Ariakit.Heading, {
  base: {},
  defaultVariants: {
    size: 'medium',
  },
  variants: {
    size: {
      '2xlarge': textStyles.heading['2xlarge'].default,
      '3xlarge': textStyles.heading['3xlarge'].default,
      '4xlarge': textStyles.heading['4xlarge'].default,
      large: textStyles.heading.large.default,
      medium: textStyles.heading.medium.default,
      small: textStyles.heading.small.default,
      xlarge: textStyles.heading.xlarge.default,
      xsmall: textStyles.heading.xsmall.default,
    },
  },
})
