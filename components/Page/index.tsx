import CN from 'classnames'

import Header from '@/components/Header'

interface Props {
  hideNav?: boolean
  children?: React.ReactNode
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
      <main className={CN('pt-12', className)} {...rest}>
        {children}
      </main>
    </>
  )
}

export default Page
