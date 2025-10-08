'use client'

import { CheckCircleIcon, CircleAlertIcon } from 'lucide-react'
import { useActionState, useId } from 'react'
import { Form } from '@/components/Form'
import { SubmitButton } from '@/components/SubmitButton'
import { TextInput } from '@/components/TextInput'
import { Text } from '@/components/Typography'
import { HStack, VStack } from '@/styled/jsx'
import type { FormState } from './action'
import { requestCv } from './action'

const initialState: FormState = {}

export default function Page() {
  const id = useId()
  const [state, action] = useActionState(requestCv, initialState)

  return (
    <Form action={action}>
      <Text as="h1" display size="lg">
        Request CV
      </Text>
      <VStack alignItems="start">
        <HStack alignItems="end" gap={0}>
          <TextInput
            aria-describedby={id}
            autoComplete="email"
            label="Email"
            name="email"
            placeholder="jacob@lapworth.nz"
            required
            type="email"
          />
          <SubmitButton>Get CV</SubmitButton>
        </HStack>
        {state.success !== undefined && (
          <HStack aria-live="polite" id={id}>
            {state.success ? (
              <CheckCircleIcon size={16} />
            ) : (
              <CircleAlertIcon size={16} />
            )}
            <Text size="sm">{state.message}</Text>
          </HStack>
        )}
      </VStack>
    </Form>
  )
}
