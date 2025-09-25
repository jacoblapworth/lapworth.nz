import { css } from '@/styled/css'

export function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={css({
        display: 'grid',
        gridAutoColumns: 'auto',
        gridAutoFlow: 'row',
        marginBlockEnd: 'lg',
        position: 'relative',
        rowGap: 'lg',
        width: '100%',
      })}
    >
      {children}
    </div>
  )
}
