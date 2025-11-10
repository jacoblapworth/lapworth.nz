import type { ColumnFiltersState } from '@tanstack/react-table'
import type { AppliedFilter } from '../Filters'

/**
 * Converts an array of AppliedFilter objects to ColumnFiltersState format
 * used by TanStack Table for filtering.
 *
 * Currently wraps all string values in arrays to support the 'arrIncludesSome'
 * filter function used by the status column. This can be extended in the future
 * to handle different filter functions based on column configuration.
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

/**
 * Converts ColumnFiltersState to AppliedFilter format for UI display.
 * Extracts the first value from arrays for simple string-based filters.
 *
 * @param columnFilters - Column filters from TanStack Table
 * @param availableFilters - Available filter definitions to get labels
 * @returns AppliedFilter array for UI components
 */
export function columnFiltersToAppliedFilters(
  columnFilters: ColumnFiltersState,
  availableFilters: { id: string; label: string }[],
): AppliedFilter[] {
  return columnFilters.map((filter) => {
    const filterDef = availableFilters.find((f) => f.id === filter.id)
    const value = Array.isArray(filter.value) ? filter.value[0] : filter.value

    return {
      id: filter.id,
      label: filterDef?.label || filter.id,
      operator: 'is',
      value: String(value),
    }
  })
}
