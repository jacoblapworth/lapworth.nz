import { useId } from 'react'
import { cva } from '@/styled/css'
import { styled } from '@/styled/jsx'
import type { HTMLStyledProps, StyledVariantProps } from '@/styled/types'
import { Label } from './label'

export const SearchField = styled('div', {
  base: {
    display: 'grid',
    // gap: '2',
    gridTemplateAreas: `
    "label label label"
    "leading input trailing"
    "help help help"
    `,
    gridTemplateColumns: 'auto 1fr auto',
  },
})

export const InputStyles = cva({
  base: {
    _disabled: {
      backgroundColor: 'background.tertiary',
      cursor: 'not-allowed',
      opacity: 0.6,
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
    color: 'text.primary',
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
    <SearchField>
      <Label htmlFor={id} required={required}>
        {label}
      </Label>
      <Input id={id} name={name} required={required} {...rest} />
    </SearchField>
  )
}
