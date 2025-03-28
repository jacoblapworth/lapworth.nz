import { useId, type ReactNode } from 'react'
import {
  useController,
  type FieldValues,
  type UseControllerProps,
} from 'react-hook-form'

import { CircleAlert } from 'lucide-react'

import { HStack, styled } from 'styled/jsx'
import type { HTMLStyledProps } from 'styled/jsx'
import type { StyledVariantProps } from 'styled/types'

const Container = styled('div', {
  base: {
    display: 'grid',
    rowGap: 'sm',
    gridTemplateAreas: `
    'label label label' 
    'input-start input input-end'
    'error error error'
    `,
  },
})

const Input = styled('input', {
  base: {
    padding: 'sm',
    borderColor: 'interactive',
    borderWidth: '1px',
    borderStyle: 'solid',
    marginInlineEnd: '-1px',
    gridArea: 'input',
  },

  variants: {
    isInvalid: {
      true: {
        borderColor: 'negative',
      },
    },
  },
})

const Label = styled('label', {
  base: {
    gridArea: 'label',
  },
})

function ErrorMessage({ children }: { children: ReactNode }) {
  if (!children) {
    return null
  }

  return (
    <HStack
      color="negative"
      gap="sm"
      fontSize="sm"
      gridArea="error"
      role="alert"
      aria-live="polite"
      _selection={{ bg: 'negative' }}
    >
      <CircleAlert size={16} role="presentation" />
      {children}
    </HStack>
  )
}

type ControlledInputProps<T extends FieldValues = FieldValues> =
  UseControllerProps<T> &
    StyledVariantProps<typeof Input> &
    HTMLStyledProps<'input'>

interface LabelProps {
  hideLabel?: boolean
  label: string
}

type Props<T extends FieldValues = FieldValues> = ControlledInputProps<T> &
  LabelProps

export function TextInput<T extends FieldValues = FieldValues>({
  name,
  rules,
  label,
  required,
  hideLabel,
  defaultValue,
  disabled,
  children,
  ...props
}: Props<T>) {
  const id = useId()
  const {
    field,
    fieldState: { invalid, error },
  } = useController({
    name,
    rules: {
      required: required || rules?.required,
      ...rules,
    },
    defaultValue,
    disabled,
  })

  const { ref, value, onBlur, onChange } = field

  return (
    <Container>
      <Label srOnly={hideLabel} htmlFor={id}>
        {label}
      </Label>
      <Input
        {...props}
        id={id}
        name={name}
        ref={ref}
        value={value}
        onBlur={onBlur}
        onChange={onChange}
        isInvalid={invalid}
        disabled={disabled}
        aria-invalid={invalid}
        aria-required={required || !!rules?.required}
      />
      {error && <ErrorMessage>{error.message}</ErrorMessage>}
      {children}
    </Container>
  )
}
