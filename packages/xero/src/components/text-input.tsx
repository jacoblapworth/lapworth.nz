import { useId } from 'react'
import { cva } from '@/styled/css'
import { styled } from '@/styled/jsx'
import type { HTMLStyledProps, StyledVariantProps } from '@/styled/types'
import { Label } from './label'

export const InputField = styled('div', {
  base: {
    display: 'grid',
    flexGrow: 1,
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
    gridColumn: '1/-1',
    gridRow: 'input',
    padding: '3',
    paddingInline: 12,
    textStyle: 'body.medium.regular',
    width: '100%',
  },
  variants: {
    size: {
      md: {
        minHeight: 40,
      },
      sm: {
        minHeight: 32,
        padding: '2',
      },
    },
  },
})

export const InputElement = styled('div', {
  base: {
    color: 'icon',
    display: 'grid',
    placeItems: 'center',
    width: 32,
  },
  variants: {
    placement: {
      leading: {
        gridArea: 'leading',
      },
      trailing: {
        gridArea: 'trailing',
      },
    },
  },
})

export const Input = styled('input', InputStyles)

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
    <InputField>
      <Label htmlFor={id} required={required}>
        {label}
      </Label>
      <Input id={id} name={name} required={required} {...rest} />
    </InputField>
  )
}
