import * as stylex from '@stylexjs/stylex'
import type { HTMLAttributes } from 'react'

const styles = stylex.create({
  srOnly: {
    position: 'absolute',
    width: '1px',
    height: '1px',
    padding: 0,
    margin: '-1px',
    overflow: 'hidden',
    clip: 'rect(0, 0, 0, 0)',
    whiteSpace: 'nowrap',
    borderWidth: 0,
  },
})

export function SrOnly({ children }: HTMLAttributes<HTMLSpanElement>) {
  return <span {...stylex.props(styles.srOnly)}>{children}</span>
}
