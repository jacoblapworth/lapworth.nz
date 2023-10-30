'use client'

import { HStack, VStack, styled } from 'styled/jsx'

import { useFormState, useFormStatus } from 'react-dom'
import { subscribeEmail } from '@/actions/subscribe'

const Button = styled('button', {
  base: {
    padding: 'sm',
    cursor: 'pointer',
    borderColor: 'interactive',
    borderWidth: '1px',
    borderStyle: 'solid',
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
  },
})

const Label = styled('label', {
  base: {},
})

export function EmailSubscribe() {
  const [state, formAction] = useFormState(subscribeEmail, { message: null })

  return (
    <form action={formAction}>
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
        {state?.message}
      </p>
    </form>
  )
}
