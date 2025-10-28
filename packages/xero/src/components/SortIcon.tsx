import { ArrowDownWideNarrowIcon, ArrowUpNarrowWideIcon } from 'lucide-react'

export function SortIcon({ sort }: { sort: 'asc' | 'desc' | false }) {
  switch (sort) {
    case 'asc':
      return <ArrowUpNarrowWideIcon size={16} />
    case 'desc':
      return <ArrowDownWideNarrowIcon size={16} />
    default:
      return null
  }
}
