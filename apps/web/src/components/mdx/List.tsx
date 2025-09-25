import type { ComponentProps } from 'react'

import { css, cva } from '@/styled/css'

const styles = cva({
  base: {
    display: 'flex',
    flexDirection: 'column',
    gap: 'sm',
    listStylePosition: 'outside',
    paddingInlineStart: '24',
  },
  variants: {
    type: {
      ol: {
        listStyleType: 'decimal',
      },
      ul: {
        listStyleType: 'square',
      },
    },
  },
})

export function UnorderedList(props: ComponentProps<'ul'>) {
  return <ul className={styles({ type: 'ul' })} {...props} />
}

export function OrderedList(props: ComponentProps<'ol'>) {
  return <ol className={styles({ type: 'ol' })} {...props} />
}

export function ListItem(props: ComponentProps<'li'>) {
  return (
    <li
      className={css({
        _marker: {
          color: 'tertiary',
        },
        lineHeight: '1.25',
        paddingInlineStart: '4',
      })}
      {...props}
    />
  )
}
