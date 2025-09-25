import NextImage from 'next/image'
import type { ComponentProps } from 'react'
import { getImageMetadata } from 'velite'
import { cva } from '@/styled/css'

const styles = cva({
  base: {
    '& + img': {
      marginBlockStart: -1,
    },
    border: 'muted',
    // boxSizing: 'border-box',
    height: 'auto',
    maxWidth: '100%',
  },
})

export async function Image(props: ComponentProps<typeof NextImage>) {
  const src = `@/public/static/${props.src.toString().replace(/\/static\//, '')}`
  const img = await import(src).then((mod) => mod.default)
  return (
    <NextImage className={styles()} placeholder="blur" {...props} src={img} />
  )
}
