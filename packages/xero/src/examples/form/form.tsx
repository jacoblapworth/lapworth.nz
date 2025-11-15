'use client'

import { SelectArrow, SelectProvider, SelectValue } from '@ariakit/react'
import type { ComponentProps } from 'react'
import { Button } from '@/components/button'
import { Form, type FormContextValue, type Props } from '@/components/form'
import { RequiredOptionalIndicator } from '@/components/label'
import { Panel } from '@/components/panel'
import {
  Select,
  SelectItem,
  SelectLabel,
  SelectPopover,
} from '@/components/select'
import { TextInput } from '@/components/text-input'
import { VStack } from '@/styled/jsx'

const genderOptions = [
  { label: 'Male', value: 'male' },
  { label: 'Female', value: 'female' },
  { label: 'Non-binary', value: 'non-binary' },
  { label: 'Non-conforming', value: 'non-conforming' },
  { label: 'Other', value: 'other' },
]

export function FormExample({
  identifyFieldsWith = 'optional',
  optionalLabel = '(optional)',
  requiredLabel = '(required)',
}: FormContextValue) {
  return (
    <Panel>
      <Form
        identifyFieldsWith={identifyFieldsWith}
        onSubmit={(e) => e.preventDefault()}
        optionalLabel={optionalLabel}
        requiredLabel={requiredLabel}
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
  )
}
