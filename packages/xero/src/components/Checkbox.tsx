import * as Ariakit from '@ariakit/react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin'
import { CheckIcon } from 'lucide-react'
import { cva } from '@/styled/css'
import { styled } from '@/styled/jsx'

gsap.registerPlugin(DrawSVGPlugin)

import { useCheckboxStore, useStoreState } from '@ariakit/react'
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
      backgroundColor: 'action',
      borderColor: 'action',
      color: 'text.inverse',
    },
    _disabled: {
      backgroundColor: 'background.quaternary',
      borderColor: 'border.subtle',
      color: 'text.inverse',
    },
    _groupHover: {
      // backgroundColor: 'background.primary',
    },
    alignItems: 'center',
    appearance: 'none',
    backgroundColor: 'background.primary',
    borderColor: 'border.subtle',
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

export const AriaCheckbox = styled(Ariakit.Checkbox, CheckboxStyles)

const Box = styled('div', CheckboxStyles)

export function Checkbox({ ref, ...props }: ComponentPropsWithRef<'input'>) {
  const checkbox = useCheckboxStore()
  const checked = useStoreState(checkbox, (state) => state.value)
  return (
    <Ariakit.Checkbox className="button" render={<Box />} store={checkbox}>
      {checked && <Check />}
    </Ariakit.Checkbox>
  )
}
