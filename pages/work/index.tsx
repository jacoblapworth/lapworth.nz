import { NextPage } from 'next'

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

export const Work: NextPage = () => {
  return (
    <Layout>
      <Experience />
      <XeroSplash />
    </Layout>
  )
}

export default Work

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {
      title: 'Work',
    },
  }
}
