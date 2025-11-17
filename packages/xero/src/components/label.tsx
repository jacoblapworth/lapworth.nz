'use client'

import { cva } from '@/styled/css'
import { styled } from '@/styled/jsx'
import { useFormContext } from './form'

export const LabelStyles = cva({
  base: {
    color: 'text.primary',
    display: 'inline-flex',
    gap: 'sm',
    gridArea: 'label',
    textStyle: 'body.medium.semibold',
  },
})

const RequiredOptionalIndicatorStyles = cva({
  base: {
    color: 'text.muted',
    textStyle: 'body.medium.regular',
  },
})

export function RequiredOptionalIndicator({
  ignoreError,
  required,
}: {
  ignoreError?: boolean
  required?: boolean
}) {
  const context = useFormContext({ ignoreError })

  if (!context) {
    return null
  }

  const { identifyFieldsWith, requiredLabel, optionalLabel } = context

  return (
    <span className={RequiredOptionalIndicatorStyles()}>
      {identifyFieldsWith === 'required'
        ? required && requiredLabel
        : !required && optionalLabel}
    </span>
  )
}

const LabelElement = styled('label', LabelStyles)

type Props = React.LabelHTMLAttributes<HTMLLabelElement> & {
  required?: boolean
  hideOptionalRequiredIndicator?: boolean
}

export function Label({
  children,
  hideOptionalRequiredIndicator,
  required,
  ...props
}: Props) {
  return (
    <LabelElement {...props}>
      {children}
      {!hideOptionalRequiredIndicator && (
        <RequiredOptionalIndicator ignoreError required={required} />
      )}
    </LabelElement>
  )
}
