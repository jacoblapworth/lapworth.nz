import { GetStaticProps } from 'next'

export default function Home() {
  return 'Work'
}

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {
      hideNav: true,
    },
  }
}
