import { HTMLAttributes, PropsWithChildren } from 'react'

import NextLink from 'next/link'

interface Props extends HTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
  href: string
}

export const Button: React.FC<PropsWithChildren<Props>> = ({
  children,
  href,
  className,
  ...rest
}) => {
  return (
    <NextLink href={href} passHref legacyBehavior>
      <button className={className} {...rest}>
        {children}
      </button>
    </NextLink>
  )
}
