'use client'

import { VisuallyHidden } from '@ariakit/react'
import { CircleXIcon, SearchIcon } from 'lucide-react'
import { type ReactNode, useId, useRef } from 'react'
import { styled } from '@/styled/jsx'

const Container = styled('div', {
  base: {
    _focusWithin: {
      outlineColor: 'border.focus',
      outlineOffset: 2,
      outlineStyle: 'solid',
      outlineWidth: 2,
    },
    alignItems: 'center',
    borderColor: 'border.subtle',
    borderRadius: 6,
    borderStyle: 'solid',
    borderWidth: 1,
    display: 'flex',
    flexGrow: 1,
    gap: 8,
    paddingBlock: 4,
    paddingInline: 8,
  },
})

const Label = styled('label', {
  base: {
    display: 'flex',
    flexGrow: 1,
    width: '100%',
  },
})

const Input = styled('input', {
  base: {
    _focus: {
      outline: 'none',
    },
    flexGrow: 1,
    fontSize: 13,
  },
})

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
}
export function Search({
  label,
  defaultValue,
  value,
  placeholder = 'Search...',
  onChange,
  onClear,
}: Props) {
  const id = useId()
  const ref = useRef<HTMLInputElement>(null)
  const isClearable = (value?.length ?? 0) > 0 //TODO: fix for uncontrolled
  return (
    <Container>
      <SearchIcon size={16} />
      <Label htmlFor={id}>
        <VisuallyHidden>{label}</VisuallyHidden>
        <Input
          defaultValue={defaultValue}
          id={id}
          onChange={onChange}
          placeholder={placeholder}
          ref={ref}
          role="searchbox"
          type="search"
          value={value}
        />
      </Label>
      {isClearable && (
        <ClearButton
          aria-label="Clear search"
          onClick={onClear}
          role="button"
        />
      )}
    </Container>
  )
}
