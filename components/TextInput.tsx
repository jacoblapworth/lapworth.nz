import { useId } from 'react'

import { VStack, styled } from 'styled/jsx'
import type { HTMLStyledProps } from 'styled/jsx'
import type { StyledVariantProps } from 'styled/types'

const Input = styled('input', {
  base: {
    padding: 'sm',
    borderColor: 'interactive',
    borderWidth: '1px',
    borderStyle: 'solid',
    marginInlineEnd: '-1px',
  },
})

const Label = styled('label', {
  base: {},
})

type InputProps = StyledVariantProps<typeof Input> & HTMLStyledProps<'input'>

interface LabelProps {
  label: string
}

type Props = InputProps & LabelProps

export function TextInput({ label, ...props }: Props) {
  const id = useId()

  return (
    <VStack alignItems="start">
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} {...props} />
    </VStack>
  )
}
