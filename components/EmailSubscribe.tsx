'use client'

import { useActionState } from 'react'
import { useFormStatus } from 'react-dom'

import Form from 'next/form'

import { HStack, VStack, styled } from 'styled/jsx'

import { FormState, subscribeEmail } from '@/actions/subscribe'

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

  return (
    <Form action={formAction}>
      <HStack alignItems="end" gap={0}>
        <TextInput
          label="Email address"
          id="email"
          name="email"
          placeholder="jacob@lapworth.nz"
          type="email"
          autoComplete="email"
          required
          aria-describedby="message"
        />
        <SubmitButton>Subscribe</SubmitButton>
      </HStack>
      <div id="message" aria-live="polite">
        {state.message}
      </div>
    </Form>
  )
}
