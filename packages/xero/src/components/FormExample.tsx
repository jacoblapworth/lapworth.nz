'use client'

import { SelectProvider } from '@ariakit/react'
import { Panel } from './Panel'
import { Select, SelectItem, SelectLabel, SelectPopover } from './Select'
import { TextInput } from './TextInput'

export function FormExample() {
  return (
    <Panel>
      <form>
        <TextInput label="Name" name="name" required />
        <SelectProvider>
          <SelectLabel>Gender</SelectLabel>
          <Select />
          <SelectPopover>
            <SelectItem value="male">Male</SelectItem>
            <SelectItem value="female">Female</SelectItem>
            <SelectItem value="non-binary">Non-binary</SelectItem>
            <SelectItem value="non-conforming">Non-conforming</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectPopover>
        </SelectProvider>
      </form>
    </Panel>
  )
}
