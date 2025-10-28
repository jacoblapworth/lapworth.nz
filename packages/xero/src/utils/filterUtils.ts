import type { ColumnFiltersState } from '@tanstack/react-table'
import type { AppliedFilter } from '../components/Filters'

/**
 * Converts an array of AppliedFilter objects to ColumnFiltersState format
 * used by TanStack Table for filtering.
 *
 * For columns using 'arrIncludesSome' filter function, the value is wrapped in an array.
 * For other filter functions, the value is used as-is.
 *
 * @param appliedFilters - Array of filters from the views/filters UI
 * @returns ColumnFiltersState array that can be passed to the table
 */
export function appliedFiltersToColumnFilters(
  appliedFilters: AppliedFilter[],
): ColumnFiltersState {
  return appliedFilters.map((filter) => ({
    id: filter.id,
    // Wrap string values in an array for arrIncludesSome filter function
    value: typeof filter.value === 'string' ? [filter.value] : filter.value,
  }))
}
