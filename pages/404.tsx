import Button from '@/components/Button'

import { GetStaticProps } from './_app'

export default function Home() {
  return (
    <>
      <h1>404</h1>
      <p>
        This page doesn’t exist. Try heading back home to start from the
        beginning.
      </p>
      <Button href={'/'}>← Back to home.</Button>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      title: '404',
    },
  }
}
