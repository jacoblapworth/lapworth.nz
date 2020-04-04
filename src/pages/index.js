import React from "react"
import { Link } from "gatsby"
import styled from '@emotion/styled'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Landing from "../components/landing"



const IndexPage = () => (
  <>
    <Landing />
    <SEO title="j" />
    <Layout style={{
      backgroundColor: "#FFE7F0"
    }}>
      <h2>👋 Hi, I'm J; a product designer excited about connecting the dots.</h2>
    </Layout>
  </>

)

export default IndexPage
