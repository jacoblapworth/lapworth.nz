import { Experience } from '@/components/Work/Experience'
import { XeroSplash } from '@/components/Work/Xero'
import { GetStaticProps } from '@/pages/_app'
import { styled } from '@/styles'

const Layout = styled('div', {
  marginBlock: '$lg',
  display: 'grid',
  columnGap: '$md',
  rowGap: '$lg',
  gridTemplateColumns: 'repeat(4, 1fr)',
})

export default function Home() {
  return (
    <Layout>
      <XeroSplash />
      <Experience />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {
      title: 'Work',
    },
  }
}
