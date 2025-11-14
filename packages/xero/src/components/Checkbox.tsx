'use client'

import * as Ariakit from '@ariakit/react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin'
import { CheckIcon } from 'lucide-react'
import { cva } from '@/styled/css'
import { styled } from '@/styled/jsx'

gsap.registerPlugin(DrawSVGPlugin)

import type { CheckboxProps } from '@ariakit/react'
import { useRef } from 'react'

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
      _hover: {
        borderColor: 'action.hover',
      },
      backgroundColor: 'action',
      borderColor: 'action',
      color: 'text.inverse',
    },
    _disabled: {
      backgroundColor: 'background.quaternary',
      borderColor: 'border.subtle',
      color: 'text.inverse',
      cursor: 'not-allowed',
    },
    _groupChecked: {
      backgroundColor: 'action',
      borderColor: 'action',
      color: 'text.inverse',
    },
    _groupHover: {
      // backgroundColor: 'background.primary',
    },
    _hover: {
      borderColor: 'border.regular',
    },
    _indeterminate: {
      _hover: {
        borderColor: 'action.hover',
      },
      backgroundColor: 'action',
      borderColor: 'action',
      color: 'text.inverse',
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

export function Checkbox({ ref, ...props }: CheckboxProps) {
  return (
    <Ariakit.Checkbox render={<Box />} {...props}>
      {props.checked === true && <Check />}
      {props.checked === 'mixed' && (
        <svg
          fill="none"
          height="12"
          role="presentation"
          viewBox="0 0 12 12"
          width="12"
        >
          <rect
            fill="currentColor"
            height="1"
            rx="0.5"
            width="10"
            x="1"
            y="5.5"
          />
        </svg>
      )}
    </Ariakit.Checkbox>
  )
}
