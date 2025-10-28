'use client'

import type { ReactNode } from 'react'
import { useFormStatus } from 'react-dom'
import { Button } from './button'

interface Props {
  children: ReactNode
}

export function SubmitButton({ children }: Props) {
  const { pending } = useFormStatus()

  return (
    <Button
      aria-disabled={pending}
      aria-label={pending ? 'Loading' : undefined}
      type="submit"
    >
      {children}
    </Button>
  )
}
