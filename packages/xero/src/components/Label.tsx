import * as stylex from '@stylexjs/stylex'
import { cva } from '@/stylex'
import { semanticColors } from '@/stylex/theme.stylex'
import { textStyles } from '@/stylex/textStyles'
import { useFormContext } from './Form'

const labelBase = stylex.create({
  default: {
    display: 'inline-flex',
    gap: '4px', // sm
  },
})

const labelText = textStyles.body.medium.semibold

export const LabelStyles = cva({
  base: stylex.create({
    default: {
      ...labelBase.default,
      ...labelText.default,
    },
  }).default,
})

const requiredOptionalBase = stylex.create({
  default: {
    color: semanticColors.text.muted,
  },
})

const requiredOptionalText = textStyles.body.medium.regular

export const RequiredOptionalIndicatorStyles = cva({
  base: stylex.create({
    default: {
      ...requiredOptionalBase.default,
      ...requiredOptionalText.default,
    },
  }).default,
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
