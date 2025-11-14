'use client'

import { CircleAlertIcon } from 'lucide-react'
import { Suspense, useActionState, useId } from 'react'
import { Form } from '@/components/form'
import { SubmitButton } from '@/components/submit-button'
import { Text } from '@/components/text'
import { TextInput } from '@/components/text-input'
import { HStack, VStack } from '@/styled/jsx'
import { type FormState, requestCv } from './action'

const initialState: FormState = {}

export default function Page() {
  const id = useId()
  const [state, action] = useActionState(requestCv, initialState)

  return (
    <VStack alignItems="start" gap="lg" marginBlock="2xl">
      <Text as="h1" display size="lg">
        Request CV
      </Text>
      <Suspense>
        <Form action={action}>
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
            {state.error && (
              <HStack aria-live="polite" id={id}>
                <CircleAlertIcon size={16} />
                <Text size="sm">{state.message}</Text>
              </HStack>
            )}
          </VStack>
        </Form>
      </Suspense>
    </VStack>
  )
}
