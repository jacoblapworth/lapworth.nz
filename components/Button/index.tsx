import { HTMLAttributes, PropsWithChildren } from 'react'

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
    <Link href={href} passHref legacyBehavior>
      <button className={className} {...rest}>
        {children}
      </button>
    </Link>
  );
}

export default Button
