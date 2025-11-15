'use client'

import {
  createContext,
  type FormHTMLAttributes,
  type ReactNode,
  use,
} from 'react'
import { styled } from '@/styled/jsx'

const FormElement = styled('form', {
  base: {
    alignItems: 'flex-start',
    display: 'flex',
    flexDirection: 'column',
    gap: 'md',
  },
})

export type FormContextValue =
  | {
      identifyFieldsWith: 'optional'
      optionalLabel: ReactNode
      requiredLabel?: ReactNode
    }
  | {
      identifyFieldsWith: 'required'
      requiredLabel: ReactNode
      optionalLabel?: ReactNode
    }

const FormContext = createContext<FormContextValue | undefined>(undefined)

export function useFormContext({
  ignoreError,
}: {
  ignoreError?: boolean
} = {}) {
  const context = use(FormContext)

  if (!context && !ignoreError) {
    throw new Error('`useFormContext` must be used within `Form`')
  }

  return context
}

export type Props = FormContextValue & FormHTMLAttributes<HTMLFormElement>

export function Form({
  children,
  identifyFieldsWith,
  requiredLabel,
  optionalLabel,
  ...props
}: Props) {
  const value = {
    identifyFieldsWith,
    optionalLabel,
    requiredLabel,
  }
  return (
    <FormElement {...props}>
      <FormContext.Provider value={value}>{children}</FormContext.Provider>
    </FormElement>
  )
}
