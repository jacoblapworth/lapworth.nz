import * as Ariakit from '@ariakit/react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin'
import { CheckIcon } from 'lucide-react'
import { cva } from '@/styled/css'
import { styled } from '@/styled/jsx'

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

export const CheckboxStyles = cva({
  base: {
    _checked: {
      backgroundColor: 'xero.action',
      borderColor: 'xero.action',
      color: 'xero.text.inverse',
    },
    _disabled: {
      backgroundColor: 'xero.background.quaternary',
      borderColor: 'xero.border.subtle',
      color: 'xero.text.inverse',
    },
    _groupHover: {
      // backgroundColor: 'xero.background.primary',
    },
    alignItems: 'center',
    backgroundColor: 'xero.background.primary',
    borderColor: 'xero.border.subtle',
    borderRadius: 6,
    borderStyle: 'solid',
    borderWidth: 1,
    cursor: 'pointer',
    display: 'flex',
    gap: 'small',
    height: 20,
    justifyContent: 'center',
    minHeight: 20,
    minWidth: 20,
    width: 20,
  },
})

// export const Checkbox = styled(Ariakit.Checkbox, CheckboxStyles, {
//   defaultProps: {
//     children: <Ariakit.CheckboxCheck render={<Check />} />,
//     render: <div />,
//   },
// })

const Box = styled('div', CheckboxStyles)

export function Checkbox({ ref, ...props }: ComponentPropsWithRef<'input'>) {
  const [checked, setChecked] = useState(props.defaultChecked ?? false)
  const [focusVisible, setFocusVisible] = useState(false)
  const id = useId()
  return (
    <label
      className="checkbox"
      data-checked={checked}
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
      <Box data-checked={checked ? 'true' : undefined}>
        {checked && <Check />}
      </Box>
    </label>
  )
}
