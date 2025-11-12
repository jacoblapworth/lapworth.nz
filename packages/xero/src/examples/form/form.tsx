'use client'

import { SelectArrow, SelectProvider, SelectValue } from '@ariakit/react'
import { Button } from '@/components/Button'
import { Form } from '@/components/Form'
import { RequiredOptionalIndicator } from '@/components/Label'
import { Panel } from '@/components/Panel'
import {
  Select,
  SelectItem,
  SelectLabel,
  SelectPopover,
} from '@/components/Select'
import { TextInput } from '@/components/TextInput'
import { VStack } from '@/styled/jsx'

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
  )
}
