import CN from 'classnames'
import Link from 'next/link'
import { CSSProperties } from 'react'

const headerStyle: CSSProperties = {
  marginLeft: 'env(safe-area-inset-left)',
}

interface Props {
  className?: string
}

const Header = ({
  className,
  ...rest
}: Props & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <header
      className={CN('fixed w-screen p-4', className)}
      style={headerStyle}
      {...rest}
    >
      <Link href="/">
        <a className="font-medium">
          Lapworth, <span className="italic">Jacob</span>
        </a>
      </Link>
    </header>
  )
}

export default Header
