import Header from '@/components/Header'

interface Props {
  hideNav?: boolean
  children?: React.ReactNode
}

const Page = ({
  hideNav,
  children,
  ...rest
}: Props & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <>
      {!hideNav && <Header />}
      <main {...rest}>{children}</main>
    </>
  )
}

export default Page
