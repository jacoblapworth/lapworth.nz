import * as stylex from '@stylexjs/stylex'
import * as Ariakit from '@ariakit/react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin'
import { CheckIcon } from 'lucide-react'
import { cva, styled } from '@/stylex'
import { borderRadius, semanticColors } from '@/stylex/theme.stylex'

gsap.registerPlugin(DrawSVGPlugin)

import { type ComponentPropsWithRef, useId, useRef, useState } from 'react'

/**
 * Check icon for the menuitem checkbox.
 *
 * Stroke animates on mount.
 */
export function Check() {
  const check = useRef<SVGSVGElement>(null)

  useGSAP(() => {
    gsap.fromTo(
      check.current?.querySelector('path') ?? null,
      { drawSVG: '100% 100%' },
      { drawSVG: '0 100%', duration: 0.3, ease: 'power2.inOut' },
    )
  }, [check])

  return (
    <CheckIcon absoluteStrokeWidth ref={check} size={12} strokeWidth={1.5} />
  )
}

const checkboxStyles = stylex.create({
  base: {
    alignItems: 'center',
    appearance: 'none',
    backgroundColor: semanticColors.background.primary.default,
    borderColor: semanticColors.border.subtle,
    borderRadius: borderRadius.md,
    borderStyle: 'solid',
    borderWidth: '1px',
    cursor: 'pointer',
    display: 'flex',
    gap: '4px',
    height: '20px',
    justifyContent: 'center',
    minHeight: '20px',
    minWidth: '20px',
    width: '20px',
  },
  checked: {
    backgroundColor: semanticColors.action.default,
    borderColor: semanticColors.action.default,
    color: semanticColors.text.inverse,
  },
  disabled: {
    backgroundColor: semanticColors.background.quaternary,
    borderColor: semanticColors.border.subtle,
    color: semanticColors.text.inverse,
  },
})

export const CheckboxStyles = cva({
  base: checkboxStyles.base,
})

export const AriaCheckbox = styled(Ariakit.Checkbox, CheckboxStyles)

const Box = styled('div', CheckboxStyles)

export function Checkbox({ ref, ...props }: ComponentPropsWithRef<'input'>) {
  const [checked, setChecked] = useState(props.defaultChecked ?? false)
  const [focusVisible, setFocusVisible] = useState(false)
  const id = useId()
  return (
    <label
      className="checkbox"
      data-checked={checked ? true : undefined}
      data-focus-visible={focusVisible || undefined}
      htmlFor={id}
    >
      <Ariakit.VisuallyHidden>
        <Ariakit.Checkbox
          {...props}
          clickOnEnter
          id={id}
          onBlur={() => setFocusVisible(false)}
          onChange={(event) => {
            setChecked(event.target.checked)
            props.onChange?.(event)
          }}
          onFocusVisible={() => setFocusVisible(true)}
          ref={ref}
        />
      </Ariakit.VisuallyHidden>
      <Box
        aria-checked={checked ? 'true' : undefined}
        {...stylex.props(checked && checkboxStyles.checked)}
      >
        {checked && <Check />}
      </Box>
    </label>
  )
}
