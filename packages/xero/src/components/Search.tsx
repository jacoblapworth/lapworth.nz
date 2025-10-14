import type { RowData, Table } from '@tanstack/react-table'
import { CircleXIcon, SearchIcon } from 'lucide-react'
import { memo, useDeferredValue, useState } from 'react'
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
    gap: 8,
    paddingBlock: 4,
    paddingInline: 8,
  },
})

const Input = styled('input', {
  base: {
    _focus: {
      outline: 'none',
    },
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
  const deferred = useDeferredValue(query)

  return (
    <Container>
      <SearchIcon size={16} />
      <Input
        onChange={(e) => {
          setQuery(e.target.value)
          table.setGlobalFilter(e.target.value)
        }}
        placeholder="Search..."
        value={deferred}
      />
      {deferred.length > 0 && <ClearButton onClick={() => setQuery('')} />}
    </Container>
  )
}
