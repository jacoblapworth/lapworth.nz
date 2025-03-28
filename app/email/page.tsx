'use client'

import { useActionState } from 'react'

import Form from 'next/form'

import { HStack } from 'styled/jsx'

import { sendEmail, type State } from '@/actions/sendEmail'
import { SubmitButton } from '@/components/EmailSubscribe'
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
        />
        <SubmitButton>Send</SubmitButton>
      </HStack>
    </Form>
  )
}
