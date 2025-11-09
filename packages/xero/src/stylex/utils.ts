import * as stylex from '@stylexjs/stylex'
import type { ComponentType, ElementType } from 'react'
import React from 'react'

// Types for StyleX styles
export type StyleXStyles = stylex.StyleXStyles<any>

// Type for variant definitions
export type VariantDefinition = {
  [variantName: string]: {
    [variantValue: string]: stylex.StyleXStyles
  }
}

// Type for CVA config
export interface CVAConfig {
  base?: stylex.StyleXStyles
  variants?: VariantDefinition
  defaultVariants?: Record<string, string>
}

// Type for variant props
export type VariantProps<T extends CVAConfig> = T['variants'] extends VariantDefinition
  ? {
      [K in keyof T['variants']]?: keyof T['variants'][K]
    }
  : never

/**
 * Component Variant API (cva) - Creates a variant-based styling function
 * This replicates the panda-css cva functionality using StyleX
 */
export function cva<T extends CVAConfig>(config: T) {
  const { base, variants = {}, defaultVariants = {} } = config

  return function (props?: VariantProps<T> & { className?: string }) {
    const styles: stylex.StyleXStyles[] = []

    // Add base styles
    if (base) {
      styles.push(base)
    }

    // Add variant styles
    if (props) {
      for (const [variantName, variantValue] of Object.entries(props)) {
        if (variantName === 'className') continue

        const actualValue = variantValue ?? defaultVariants[variantName]
        if (actualValue && variants[variantName]?.[actualValue as string]) {
          styles.push(variants[variantName][actualValue as string])
        }
      }
    } else {
      // Apply default variants when no props provided
      for (const [variantName, variantValue] of Object.entries(defaultVariants)) {
        if (variants[variantName]?.[variantValue]) {
          styles.push(variants[variantName][variantValue])
        }
      }
    }

    // Convert to className
    return stylex.props(...styles).className + (props?.className ? ` ${props.className}` : '')
  }
}

// Type for styled component config
export interface StyledConfig<V extends VariantDefinition = VariantDefinition> {
  base?: stylex.StyleXStyles
  variants?: V
  defaultVariants?: Record<string, string>
  defaultProps?: Record<string, unknown>
}

// Extract props from styled config
export type StyledVariantProps<T> = T extends { variants: infer V }
  ? V extends VariantDefinition
    ? VariantProps<{ variants: V }>
    : never
  : never

/**
 * Styled factory - Creates styled components with variants
 * This replicates the panda-css styled functionality using StyleX
 */
export function styled<
  T extends ElementType | ComponentType<any>,
  V extends VariantDefinition = VariantDefinition,
>(
  Component: T,
  config?: StyledConfig<V> | CVAConfig,
  options?: {
    defaultProps?: Record<string, unknown>
  },
) {
  const { base, variants = {} as V, defaultVariants = {}, defaultProps } = {
    ...(config as StyledConfig<V>),
    ...options,
  }

  type ComponentProps = T extends ElementType
    ? React.ComponentPropsWithoutRef<T>
    : T extends ComponentType<infer P>
      ? P
      : never

  type StyledProps = ComponentProps &
    VariantProps<{ variants: V }> & {
      className?: string
      style?: React.CSSProperties
    }

  const StyledComponent = React.forwardRef<any, StyledProps>((props, ref) => {
    const {
      className: externalClassName,
      style,
      ...restProps
    } = props as StyledProps & Record<string, any>

    const styles: stylex.StyleXStyles<any>[] = []

    // Add base styles
    if (base) {
      styles.push(base)
    }

    // Add variant styles
    const variantProps: Record<string, unknown> = {}
    const componentProps: Record<string, unknown> = { ...defaultProps }

    for (const [key, value] of Object.entries(restProps)) {
      if (key in variants) {
        variantProps[key] = value ?? (defaultVariants as Record<string, string>)[key]
        const variantValue = variantProps[key] as string
        if (variantValue && (variants as Record<string, any>)[key]?.[variantValue]) {
          styles.push((variants as Record<string, any>)[key][variantValue])
        }
      } else {
        componentProps[key] = value
      }
    }

    // Apply default variants for missing variant props
    for (const [variantName, variantValue] of Object.entries(defaultVariants)) {
      if (!(variantName in variantProps) && (variants as Record<string, any>)[variantName]?.[variantValue]) {
        styles.push((variants as Record<string, any>)[variantName][variantValue])
      }
    }

    const stylexProps = stylex.props(...styles)
    const className = [stylexProps.className, externalClassName].filter(Boolean).join(' ') || undefined

    return React.createElement(Component, {
      ...componentProps,
      ref,
      className,
      style: { ...stylexProps.style, ...style },
    })
  })

  StyledComponent.displayName = `Styled(${
    typeof Component === 'string'
      ? Component
      : (Component as ComponentType).displayName || (Component as ComponentType).name || 'Component'
  })`

  return StyledComponent
}

/**
 * CSS utility - Creates a className from StyleX styles
 * This replicates panda-css css function
 */
export function css(...styles: stylex.StyleXStyles<any>[]): string {
  return stylex.props(...styles).className
}
