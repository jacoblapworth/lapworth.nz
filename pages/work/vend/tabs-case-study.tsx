import { MDXProvider } from '@mdx-js/react'
import { NextPage } from 'next'

import VendTabs from '../../../posts/work/vend-tabs.mdx'

export const Page: NextPage = () => {
  return (
    <>
      <MDXProvider>
        <VendTabs />
      </MDXProvider>
    </>
  )
}

export default Page
