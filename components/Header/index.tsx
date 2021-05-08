import Link from 'next/link'
import CN from 'classnames'

interface Props {
  className?: string
}

const Header = ({
  className,
  ...rest
}: Props & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <header className={CN('fixed w-screen p-4', className)} {...rest}>
      <Link href="/">
        <a className="font-medium">
          Lapworth, <span className="italic">Jacob</span>
        </a>
      </Link>
    </header>
  )
}

export default Header
