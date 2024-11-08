'use client'

import Form from 'next/form'
import { useFormState, useFormStatus } from 'react-dom'

import { HStack, VStack, styled } from 'styled/jsx'

import { FormState, subscribeEmail } from '@/actions/subscribe'

const Button = styled('button', {
  base: {
    padding: 'sm',
    cursor: 'pointer',
    borderColor: 'interactive',
    borderWidth: '1px',
    borderStyle: 'solid',
    _hover: {
      backgroundColor: 'interactive',
      color: 'background',
    },
  },
})

interface Props {
  children: React.ReactNode
}

export function SubmitButton({ children }: Props) {
  const { pending } = useFormStatus()

  return (
    <Button
      type="submit"
      aria-disabled={pending}
      aria-label={pending ? 'Loading' : undefined}
    >
      {children}
    </Button>
  )
}

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

const initialState: FormState = {
  message: null,
}

export function EmailSubscribe() {
  const [state, formAction] = useFormState(subscribeEmail, initialState)

  return (
    <Form action={formAction}>
      <HStack alignItems="end" gap={0}>
        <VStack alignItems="start">
          <Label htmlFor="email">Email address</Label>
          <Input
            id="email"
            name="email"
            placeholder="jacob@lapworth.nz"
            type="email"
            autoComplete="email"
            required
            aria-describedby="message"
          />
        </VStack>

        <SubmitButton>Subscribe</SubmitButton>
      </HStack>
      <p id="message" aria-live="polite">
        {state.message}
      </p>
    </Form>
  )
}
