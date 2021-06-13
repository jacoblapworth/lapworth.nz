import Header from '@/components/Header'
import CN from 'classnames'
import { CSSProperties } from 'react'

interface Props {
  hideNav?: boolean
  children?: React.ReactNode
}

const pageStyle: CSSProperties = {
  // marginTop: 'env(safe-area-inset-top)',
  marginBottom: 'env(safe-area-inset-bottom)',
}

const Page = ({
  hideNav,
  className,
  children,
  ...rest
}: Props & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <>
      {!hideNav && <Header />}
      <main className={CN('pt-12', className)} style={pageStyle} {...rest}>
        {children}
      </main>
    </>
  )
}

export default Page
