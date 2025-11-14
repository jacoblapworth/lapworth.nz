import { useId } from 'react'

import type { HTMLStyledProps } from '@/styled/jsx'
import { styled, VStack } from '@/styled/jsx'
import type { StyledVariantProps } from '@/styled/types'

const Input = styled('input', {
  base: {
    borderColor: 'interactive',
    borderStyle: 'solid',
    borderWidth: '1',
    marginInlineEnd: '-1',
    padding: 'sm',
  },

  variants: {
    isInvalid: {
      true: {
        borderColor: 'critical',
      },
    },
  },
})

const Label = styled('label', {
  base: {},
})

type InputProps = StyledVariantProps<typeof Input> & HTMLStyledProps<'input'>

interface LabelProps {
  hideLabel?: boolean
  label: string
}

type Props = InputProps & LabelProps

export function TextInput({ label, hideLabel, ...props }: Props) {
  const id = useId()

  return (
    <VStack alignItems="start">
      <Label htmlFor={id} srOnly={hideLabel}>
        {label}
      </Label>
      <Input id={id} {...props} />
    </VStack>
  )
}
