import type { ComponentProps } from 'react'
import { css } from '@/styled/css'

const styles = css({
  background: 'divider',
  height: '1px',
  marginBlock: 'md',
})

export const Divider = (props: ComponentProps<'hr'>) => (
  <hr className={styles} {...props} />
)
