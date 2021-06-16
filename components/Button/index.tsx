import Link from 'next/link'
import { HTMLAttributes } from 'react'
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
  href?: string
}

const Button: React.FC<Props> = ({ children, href, className, ...rest }) => {
  return (
    <Link href={href} passHref>
      <button className={cn('hover:opacity-60', className)} {...rest}>{children}</button>
    </Link>
  )
}

export default Button
