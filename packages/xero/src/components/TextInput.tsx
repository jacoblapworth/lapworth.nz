import { useId } from 'react'
import { styled } from '@/styled/jsx'
import type { StyledVariantProps } from '@/styled/types'

const Wrapper = styled('div', {
  base: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2',
  },
})

const Label = styled('label', {
  base: {
    display: 'inline-flex',
    gap: 'sm',
    textStyle: 'body.medium.semibold',
  },
})

const RequiredOptionalIndicator = styled('span', {
  base: {
    color: 'text.muted',
    textStyle: 'body.medium.regular',
  },
})

const Input = styled('input', {
  base: {
    _disabled: {
      backgroundColor: 'background.muted',
      cursor: 'not-allowed',
      opacity: 0.6,
    },
    _focus: {
      borderColor: 'primary',
      boxShadow: 'focus',
      outline: 'none',
    },
    backgroundColor: 'background.primary',
    border: 'muted',
    borderRadius: 'sm',
    padding: '3',
    textStyle: 'body.medium.regular',
    width: '100%',
  },
})

type Props = StyledVariantProps<typeof Input> & {
  label: string
  name: string
  required?: boolean
}

export function TextInput(props: Props) {
  const { label, name, required, ...rest } = props
  const id = useId()

  return (
    <Wrapper>
      <Label htmlFor={id}>
        {label}
        <RequiredOptionalIndicator>
          {required ? '(Required)' : '(Optional)'}
        </RequiredOptionalIndicator>
      </Label>
      <Input id={id} name={name} required={required} {...rest} />
    </Wrapper>
  )
}
