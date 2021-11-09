import { GetStaticProps } from './_app'

export default function Home() {
  return 'Contact'
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      title: 'Contact',
    },
  }
}
