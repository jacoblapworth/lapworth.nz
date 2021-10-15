import Header from '@/components/Header'
import { useTheme } from '@/components/Providers/ThemeColor'
import { styled } from '@/styles'
import { NextSeo } from 'next-seo'

interface Props {
  hideNav?: boolean
  children?: React.ReactNode
}

const Main = styled('main', {
  paddingBlockStart: 56,
  marginBottom: 'env(safe-area-inset-bottom)',
  marginInline: 16,
})

const Page = ({
  hideNav,
  className,
  children,
  ...rest
}: Props & React.HTMLAttributes<HTMLDivElement>) => {
  const { color } = useTheme()
  return (
    <>
      <NextSeo
        additionalMetaTags={[
          {
            name: 'theme-color',
            content: color,
          },
        ]}
      />

      {!hideNav && <Header />}

      <Main {...rest}>{children}</Main>

      <style jsx global>{`
        body {
          background: ${color};
        }
      `}</style>
    </>
  )
}

export default Page
