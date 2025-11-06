'use client'

import { SelectArrow, SelectProvider, SelectValue } from '@ariakit/react'
import { useState } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { VStack } from '@/styled/jsx'
import { Button } from './Button'
import { Form } from './Form'
import { RequiredOptionalIndicator } from './Label'
import { Panel } from './Panel'
import { Select, SelectItem, SelectLabel, SelectPopover } from './Select'
import { TextInput } from './TextInput'

const genderOptions = [
  { label: 'Male', value: 'male' },
  { label: 'Female', value: 'female' },
  { label: 'Non-binary', value: 'non-binary' },
  { label: 'Non-conforming', value: 'non-conforming' },
  { label: 'Other', value: 'other' },
]

interface Props {
  identifyFieldsWith?: 'optional' | 'required'
}

export function FormExample({ identifyFieldsWith = 'optional' }: Props) {
  return (
    <ErrorBoundary fallback={<div>Something went wrong.</div>}>
      <Panel>
        <Form
          identifyFieldsWith={identifyFieldsWith}
          onSubmit={(e) => {
            e.preventDefault()
          }}
          optionalLabel="(Optional)"
          requiredLabel="(Required)"
        >
          <TextInput
            autoComplete="name"
            label="Name"
            name="name"
            placeholder="Your name"
            required
          />
          <VStack alignItems="flex-start" gap="2">
            <SelectProvider defaultValue={undefined}>
              <SelectLabel>
                Gender
                <RequiredOptionalIndicator />
              </SelectLabel>
              <Select>
                <SelectValue fallback="Choose one">
                  {(v) => genderOptions.find(({ value }) => value === v)?.label}
                </SelectValue>
                <SelectArrow />
              </Select>
              <SelectPopover>
                {genderOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectPopover>
            </SelectProvider>
          </VStack>
          <Button size="md" type="submit" variant="primary">
            Save
          </Button>
        </Form>
      </Panel>
    </ErrorBoundary>
  )
}
