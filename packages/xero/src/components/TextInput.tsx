import { useId } from 'react'
import { cva } from '@/styled/css'
import { styled } from '@/styled/jsx'
import type { HTMLStyledProps, StyledVariantProps } from '@/styled/types'
import { Label } from './Label'

const Wrapper = styled('div', {
  base: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2',
  },
})

export const InputStyles = cva({
  base: {
    _disabled: {
      backgroundColor: 'background.tertiary',
      cursor: 'not-allowed',
      opacity: 0.6,
    },
    _focus: {
      borderColor: 'primary',
      boxShadow: 'focus',
      outline: 'none',
    },
    _hover: {
      borderColor: 'border.regular',
    },
    _placeholder: {
      color: 'text.faint',
    },
    backgroundColor: 'background.primary',
    border: 'subtle',
    borderRadius: 'md',
    minHeight: 40,
    padding: '3',
    paddingInline: 12,
    textStyle: 'body.medium.regular',
    width: '100%',
  },
})

const Input = styled('input', InputStyles)

type Props = StyledVariantProps<typeof Input> &
  HTMLStyledProps<'input'> & {
    label: string
    name: string
    required?: boolean
  }

export function TextInput(props: Props) {
  const { label, name, required, ...rest } = props
  const id = useId()

  return (
    <Wrapper>
      <Label htmlFor={id} required={required}>
        {label}
      </Label>
      <Input id={id} name={name} required={required} {...rest} />
    </Wrapper>
  )
}
