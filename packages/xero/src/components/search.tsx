'use client'

import { VisuallyHidden } from '@ariakit/react'
import { CircleXIcon, SearchIcon } from 'lucide-react'
import { type ReactNode, useId, useRef } from 'react'
import { styled } from '@/styled/jsx'
import { Label } from './label'
import { Input, InputElement, InputField, TextInput } from './text-input'

const ClearButton = styled(
  'button',
  {
    base: {
      color: {
        _hover: 'icon',
        base: 'icon.faint',
      },
      cursor: 'pointer',
    },
  },
  {
    defaultProps: {
      children: <CircleXIcon size={16} />,
    },
  },
)

interface Props {
  label: ReactNode
  defaultValue?: string
  value?: string
  placeholder?: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onClear: () => void
  size?: 'sm' | 'md'
}
export function Search({
  label,
  defaultValue,
  value,
  placeholder = 'Search...',
  onChange,
  onClear,
  size,
}: Props) {
  const id = useId()
  const ref = useRef<HTMLInputElement>(null)
  const isClearable = (value?.length ?? 0) > 0 //TODO: fix for uncontrolled
  return (
    <InputField>
      <VisuallyHidden>
        <Label htmlFor={id}>{label}</Label>
      </VisuallyHidden>
      <Input
        defaultValue={defaultValue}
        id={id}
        onChange={onChange}
        paddingInlineEnd={isClearable ? 36 : 12}
        paddingInlineStart={36}
        placeholder={placeholder}
        ref={ref}
        role="searchbox"
        size={size}
        type="search"
        value={value}
      />
      <InputElement placement="leading">
        <SearchIcon size={16} />
      </InputElement>
      {isClearable && (
        <InputElement placement="trailing">
          <ClearButton
            aria-label="Clear search"
            onClick={onClear}
            role="button"
          />
        </InputElement>
      )}
    </InputField>
  )
}
