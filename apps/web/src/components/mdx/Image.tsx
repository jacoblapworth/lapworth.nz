import NextImage from 'next/image'
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

export function Image(props: React.ComponentProps<typeof NextImage>) {
  return (
    <NextImage
      className={styles()}
      height={400}
      placeholder={props.blurDataURL ? 'blur' : undefined}
      width={800}
      {...props}
    />
  )
}
