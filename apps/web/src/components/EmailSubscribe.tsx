'use client'

import Form from 'next/form'
import { useActionState, useId } from 'react'

import { type FormState, subscribeEmail } from '@/actions/subscribe'
import { HStack } from '@/styled/jsx'
import { SubmitButton } from './SubmitButton'
import { TextInput } from './TextInput'

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
          aria-describedby={id}
          autoComplete="email"
          label="Email address"
          name="email"
          placeholder="jacob@lapworth.nz"
          required
          type="email"
        />
        <SubmitButton>Subscribe</SubmitButton>
      </HStack>
      <div aria-live="polite" id={id}>
        {state.message}
      </div>
    </Form>
  )
}
