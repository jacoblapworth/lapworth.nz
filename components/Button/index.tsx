import Link from 'next/link'

interface Props {
  children?: React.ReactNode
  href?: string
}

const Button: React.FC<Props> = ({ children, href, ...rest }) => {
  return (
    <Link href={href}>
      <button {...rest}>{children}</button>
    </Link>
  )
}

export default Button
