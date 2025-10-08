'use client'

import Form from 'next/form'
import { useActionState } from 'react'

import { type State, sendEmail } from '@/actions/sendEmail'
import { SubmitButton } from '@/components/SubmitButton'
import { TextInput } from '@/components/TextInput'
import { HStack } from '@/styled/jsx'

const initialState: State = {
  status: 'idle',
}

export default function Page() {
  const [_, action] = useActionState(sendEmail, initialState)

  return (
    <Form action={action}>
      <HStack alignItems="end" gap={0}>
        <TextInput
          autoComplete="email"
          label="Email"
          name="email"
          placeholder="Email"
          required
          type="email"
        />
        <SubmitButton>Send</SubmitButton>
      </HStack>
    </Form>
  )
}
