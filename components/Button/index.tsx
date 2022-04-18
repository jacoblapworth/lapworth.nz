import { HTMLAttributes, PropsWithChildren } from 'react'

import cn from 'classnames'
import Link from 'next/link'

interface Props extends HTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
  href: string
}

const Button: React.FC<PropsWithChildren<Props>> = ({
  children,
  href,
  className,
  ...rest
}) => {
  return (
    <Link href={href} passHref>
      <button className={cn('hover:opacity-60', className)} {...rest}>
        {children}
      </button>
    </Link>
  )
}

export default Button
