import { cva } from '@/styled/css'
import { useFormContext } from './Form'

export const LabelStyles = cva({
  base: {
    color: 'text.primary',
    display: 'inline-flex',
    gap: 'sm',
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
    console.warn('`RequiredOptionalIndicator` used without `Form` context')
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
    // biome-ignore lint/a11y/noLabelWithoutControl: Component is used within a label context
    <label className={LabelStyles()} {...props}>
      {children}
      {!hideOptionalRequiredIndicator && (
        <RequiredOptionalIndicator ignoreError required={required} />
      )}
    </label>
  )
}
