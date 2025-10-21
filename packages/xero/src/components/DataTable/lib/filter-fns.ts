// RowData import removed - not needed in these helper functions
import {
  endOfDay,
  isAfter,
  isBefore,
  isSameDay,
  isWithinInterval,
  startOfDay,
} from 'date-fns'
import { dateFilterOperators } from '../core/operators'
import type { FilterModel } from '../core/types'
import { intersection } from './array'

export function optionFilterFn(
  inputData: string,
  filterValue: FilterModel<'option'>,
) {
  if (!inputData) return false
  if (filterValue.values.length === 0) return true

  const value = inputData.toString().toLowerCase()

  const found = !!filterValue.values.find((v) => v.toLowerCase() === value)

  switch (filterValue.operator) {
    case 'is':
    case 'is any of':
      return found
    case 'is not':
    case 'is none of':
      return !found
  }
  return true
}

export function multiOptionFilterFn(
  inputData: string[],
  filterValue: FilterModel<'multiOption'>,
) {
  if (!inputData) return false

  if (
    filterValue.values.length === 0 ||
    !filterValue.values[0] ||
    filterValue.values[0].length === 0
  )
    return true

  const values = inputData
  const filterValues = filterValue.values

  switch (filterValue.operator) {
    case 'include':
    case 'include any of':
      return intersection(values, filterValues).length > 0
    case 'exclude':
      return intersection(values, filterValues).length === 0
    case 'exclude if any of':
      return !(intersection(values, filterValues).length > 0)
    case 'include all of':
      return intersection(values, filterValues).length === filterValues.length
    case 'exclude if all':
      return !(
        intersection(values, filterValues).length === filterValues.length
      )
  }
  return true
}

export function dateFilterFn(
  inputData: Date,
  filterValue: FilterModel<'date'>,
) {
  if (!filterValue || filterValue.values.length === 0) {
    return true
  }

  if (
    dateFilterOperators[filterValue.operator].target === 'single' &&
    filterValue.values.length > 1
  ) {
    throw new Error('Singular operators require at most one filter value')
  }

  if (
    ['is between', 'is not between'].includes(filterValue.operator) &&
    filterValue.values.length !== 2
  ) {
    throw new Error('Plural operators require two filter values')
  }

  const filterVals = filterValue.values
  if (!filterVals || filterVals.length === 0) return true
  const d1 = filterVals[0]
  const d2 = filterVals[1]
  if (!d1) return true

  const value = inputData

  switch (filterValue.operator) {
    case 'is':
      return isSameDay(value, d1)
    case 'is not':
      return !isSameDay(value, d1)
    case 'is before':
      return isBefore(value, startOfDay(d1))
    case 'is on or after':
      return isSameDay(value, d1) || isAfter(value, startOfDay(d1))
    case 'is after':
      return isAfter(value, startOfDay(d1))
    case 'is on or before':
      return isSameDay(value, d1) || isBefore(value, startOfDay(d1))
    case 'is between':
      if (!d2) return true
      return isWithinInterval(value, {
        end: endOfDay(d2),
        start: startOfDay(d1),
      })
    case 'is not between':
      if (!filterValue.values[1] || !filterValue.values[0]) return true
      return !isWithinInterval(value, {
        end: endOfDay(filterValue.values[1]),
        start: startOfDay(filterValue.values[0]),
      })
  }
  return true
}

export function textFilterFn(
  inputData: string,
  filterValue: FilterModel<'text'>,
) {
  if (!filterValue || filterValue.values.length === 0) return true

  const value = inputData.toLowerCase().trim()
  if (!filterValue.values || filterValue.values.length === 0) return true
  const filterStr = (filterValue.values[0] as string).toLowerCase().trim()

  if (filterStr === '') return true

  const found = value.includes(filterStr)

  switch (filterValue.operator) {
    case 'contains':
      return found
    case 'does not contain':
      return !found
  }
  return true
}

export function numberFilterFn(
  inputData: number,
  filterValue: FilterModel<'number'>,
) {
  if (!filterValue || !filterValue.values || filterValue.values.length === 0) {
    return true
  }

  const value = inputData
  const filterVal = filterValue.values[0]
  if (filterVal === undefined) return true

  switch (filterValue.operator) {
    case 'is':
      return value === filterVal
    case 'is not':
      return value !== filterVal
    case 'is greater than':
      return value > filterVal
    case 'is greater than or equal to':
      return value >= filterVal
    case 'is less than':
      return value < filterVal
    case 'is less than or equal to':
      return value <= filterVal
    case 'is between': {
      const lowerBound = filterValue.values[0]
      const upperBound = filterValue.values[1]
      if (lowerBound === undefined || upperBound === undefined) return true
      return value >= lowerBound && value <= upperBound
    }
    case 'is not between': {
      const lowerBound = filterValue.values[0]
      const upperBound = filterValue.values[1]
      if (lowerBound === undefined || upperBound === undefined) return true
      return value < lowerBound || value > upperBound
    }
    default:
      return true
  }
}
