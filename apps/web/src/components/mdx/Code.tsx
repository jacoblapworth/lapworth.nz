import type { JSX } from 'react'
import { cva, cx } from '@/styled/css'

const styles = cva({
  base: {
    '& > [data-line].highlighted': {
      _light: {
        backgroundColor: 'rgba(0, 0, 0, 0.03)',
      },
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },
    fontFamily: 'mono',
    fontSize: 'sm',
  },

  variants: {
    hasLineNumbers: {
      true: {
        '& > [data-line]::before': {
          color: 'quaternary',
          content: ' counter(line)',
          counterIncrement: 'line',
          display: 'inline-block',
          marginInline: 'md',
          textAlign: 'right',
          verticalAlign: 'bottom',
        },
        counterReset: 'line',
      },
    },
  },
})

export const Code = (props: React.ComponentProps<'code'>): JSX.Element => {
  const { className = '', ...rest } = props
  const hasLineNumbers = 'data-line-numbers' in props
  return (
    <code
      className={cx(styles({ hasLineNumbers }), className)}
      dir="ltr"
      {...rest}
    />
  )
}
