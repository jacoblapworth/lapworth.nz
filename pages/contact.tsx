import { NextPage } from 'next'

import { GetStaticProps } from './_app'

export const ContactPage: NextPage = () => {
  return <>Contact</>
}

export default ContactPage

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      title: 'Contact',
    },
  }
}
