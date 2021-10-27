import { GetStaticProps } from 'next'

export default function Home() {
  return 'Coming soon'
}

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {
      // hideNav: true,
    },
  }
}
