'use client'

import Form from 'next/form'
import { useActionState, useId } from 'react'
import { useFormStatus } from 'react-dom'

import { type FormState, subscribeEmail } from '@/actions/subscribe'
import { HStack } from '@/styled/jsx'

import { Button } from './Button'
import { TextInput } from './TextInput'

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

const initialState: FormState = {
  message: null,
}

export function EmailSubscribe() {
  const [state, formAction] = useActionState(subscribeEmail, initialState)
  const id = useId()

  return (
    <Form action={formAction}>
      <HStack alignItems="end" gap={0}>
        <TextInput
          label="Email address"
          name="email"
          placeholder="jacob@lapworth.nz"
          type="email"
          autoComplete="email"
          required
          aria-describedby={id}
        />
        <SubmitButton>Subscribe</SubmitButton>
      </HStack>
      <div id={id} aria-live="polite">
        {state.message}
      </div>
    </Form>
  )
}
