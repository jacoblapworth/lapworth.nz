import type { ComponentProps, HTMLAttributes } from 'react'
import { Text } from '../Typography'

type Props = ComponentProps<typeof Text>

export const HeadingAnchor = ({ children, ...props }: Props) => {
  // const pathname = usePathname()

  return (
    <Text css={{ marginBlock: 'lg' }} display {...props}>
      {/* <Link
        href={`${pathname}#${props.id}`}
        sameTab
        css={{ display: 'inline-flex', gap: 'sm', alignItems: 'center' }}
      > */}
      {children}
      {/* </Link> */}
    </Text>
  )
}

type HeadingProps = HTMLAttributes<HTMLHeadingElement>

export const h1 = (props: HeadingProps) => (
  <HeadingAnchor as="h1" size="lg" {...props} />
)

export const h2 = (props: HeadingProps) => (
  <HeadingAnchor as="h2" size="md" {...props} />
)

export const h3 = (props: HeadingProps) => (
  <HeadingAnchor as="h3" size="sm" {...props} />
)
