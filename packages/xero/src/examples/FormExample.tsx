'use client'

import { SelectProvider, SelectValue } from '@ariakit/react'
import { useState } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { VStack } from '@/styled/jsx'
import { Button } from '../components/Button'
import { Form } from '../components/Form'
import { RequiredOptionalIndicator } from '../components/Label'
import { Panel } from '../components/Panel'
import {
  Select,
  SelectArrow,
  SelectItem,
  SelectLabel,
  SelectPopover,
} from '../components/Select'
import { TextInput } from '../components/TextInput'

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
            <SelectProvider>
              <SelectLabel>
                Gender
                <RequiredOptionalIndicator />
              </SelectLabel>
              <Select>
                <span>
                  <SelectValue fallback="Choose one">
                    {(v) =>
                      genderOptions.find(({ value }) => value === v)?.label ??
                      'Choose one'
                    }
                  </SelectValue>
                </span>
                <SelectArrow />
              </Select>
              <SelectPopover>
                <SelectItem value="null">Choose one</SelectItem>
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
