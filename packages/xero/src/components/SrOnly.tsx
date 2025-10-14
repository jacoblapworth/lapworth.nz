import type { HTMLAttributes } from 'react'

import { css } from '@/styled/css'

export function SrOnly({ children }: HTMLAttributes<HTMLSpanElement>) {
  return <span className={css({ srOnly: true })}>{children}</span>
}
