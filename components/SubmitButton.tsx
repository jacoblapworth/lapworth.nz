import { useFormStatus } from 'react-dom'

import { Button } from './Button'

interface Props {
  children: React.ReactNode
}

export function SubmitButton({ children }: Props) {
  const { pending } = useFormStatus()

  return (
    <Button
      type="submit"
      aria-disabled={pending}
      aria-label={pending ? 'Loading' : undefined}
      gridArea="input-end"
    >
      {children}
    </Button>
  )
}
