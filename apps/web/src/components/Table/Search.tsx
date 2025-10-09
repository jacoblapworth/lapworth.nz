import { CircleXIcon, CrossIcon, SearchIcon } from 'lucide-react'
import { styled } from '@/styled/jsx'

const Container = styled('div', {
  base: {
    _focusWithin: {
      outline: '2px solid',
      outlineOffset: 2,
    },
    alignItems: 'center',
    borderColor: 'xero.border.subtle',
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
        _hover: 'xero.icon',
        base: 'xero.icon.faint',
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
  query: string
  onSearch: (query: string) => void
}

export function Search({ query, onSearch }: Props) {
  return (
    <Container>
      <SearchIcon size={16} />
      <Input
        onChange={(e) => onSearch(e.target.value)}
        placeholder="Search..."
        value={query}
      />
      {query.length > 0 && <ClearButton onClick={() => onSearch('')} />}
    </Container>
  )
}
