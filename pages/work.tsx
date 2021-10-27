import { GetStaticProps } from 'next'

export default function Home() {
  return ''
}

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {
      hideNav: true,
    },
  }
}
