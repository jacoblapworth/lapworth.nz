'use client'

import { useActionState } from 'react'

import { HStack } from 'styled/jsx'

import { sendEmail, type State } from '@/actions/sendEmail'
import { Form } from '@/components/Form'
import { SubmitButton } from '@/components/SubmitButton'
import { TextInput } from '@/components/TextInput'

const initialState: State = {
  status: 'idle',
}

export default function Page() {
  const [_, action] = useActionState(sendEmail, initialState)

  return (
    <Form action={action}>
      <HStack gap={0} alignItems="end">
        <TextInput
          label="Email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="Email"
          required
          defaultValue=""
          rules={{
            required: 'Email is required',
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: 'Invalid email address',
            },
          }}
        >
          <SubmitButton>Send</SubmitButton>
        </TextInput>
      </HStack>
    </Form>
  )
}
