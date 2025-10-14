import { VisuallyHidden } from '@ariakit/react'
import type { RowData, Table } from '@tanstack/react-table'
import { CircleXIcon, SearchIcon } from 'lucide-react'
import { memo, useDeferredValue, useId, useState } from 'react'
import { styled } from '@/styled/jsx'

const Container = styled('div', {
  base: {
    _focusWithin: {
      outline: '2px solid',
      outlineOffset: 2,
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

interface Props<TData extends RowData> {
  table: Table<TData>
  // query: string
  // onSearch: (query: string) => void
}

export function Search<TData extends RowData>({ table }: Props<TData>) {
  const [query, setQuery] = useState('')
  const id = useId()

  return (
    <Container>
      <SearchIcon size={16} />
      <Label htmlFor={id}>
        <VisuallyHidden>Search table</VisuallyHidden>
        <Input
          id={id}
          onChange={(e) => {
            setQuery(e.target.value)
            table.setGlobalFilter(e.target.value)
          }}
          placeholder="Search..."
          value={query}
        />
      </Label>
      {query.length > 0 && (
        <ClearButton
          onClick={() => {
            setQuery('')
            table.setGlobalFilter('')
          }}
        />
      )}
    </Container>
  )
}
