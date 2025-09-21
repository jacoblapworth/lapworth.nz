'use client'

import Form from 'next/form'
import { useActionState } from 'react'

import { type State, sendEmail } from '@/src/actions/sendEmail'
import { SubmitButton } from '@/src/components/EmailSubscribe'
import { TextInput } from '@/src/components/TextInput'
import { HStack } from '@/styled/jsx'

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
        />
        <SubmitButton>Send</SubmitButton>
      </HStack>
    </Form>
  )
}
