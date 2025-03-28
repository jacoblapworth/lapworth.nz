'use client'

import { useActionState } from 'react'

import { CircleAlert } from 'lucide-react'

import { HStack } from 'styled/jsx'

import { FormState, subscribeEmail } from '@/actions/subscribe'

import { Alert } from './Alert'
import { Form } from './Form'
import { SubmitButton } from './SubmitButton'
import { TextInput } from './TextInput'

const initialState: FormState = {
  status: 'idle',
  message: null,
}

export function EmailSubscribe() {
  const [{ status, message }, formAction] = useActionState(
    subscribeEmail,
    initialState,
  )

  if (status === 'success') {
    return (
      <Alert autoFocus sentiment="positive">
        {message}
      </Alert>
    )
  }

  return (
    <Form action={formAction}>
      <HStack alignItems="end" gap={0}>
        <TextInput
          label="Email address"
          id="email"
          name="email"
          defaultValue=""
          placeholder="jacob@lapworth.nz"
          type="email"
          autoComplete="email"
          required
          aria-describedby="message"
          rules={{
            required: 'Email is required',
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: 'Invalid email address',
            },
          }}
        >
          <SubmitButton>Subscribe</SubmitButton>
        </TextInput>
      </HStack>
      {message && (
        <HStack id="message" aria-live="polite" gap="sm" fontSize="sm">
          {status == 'error' && <CircleAlert size={16} />}
          {message}
        </HStack>
      )}
    </Form>
  )
}
