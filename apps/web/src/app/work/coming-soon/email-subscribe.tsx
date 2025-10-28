'use client'

import Form from 'next/form'
import { useActionState, useId } from 'react'

import { type FormState, subscribeEmail } from '@/app/work/coming-soon/action'
import { SubmitButton } from '@/components/submit-button'
import { TextInput } from '@/components/text-input'
import { HStack } from '@/styled/jsx'

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
