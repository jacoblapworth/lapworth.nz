import React from "react"
import { Link } from "gatsby"
import styled from '@emotion/styled'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Landing from "../components/landing"

const Intro = styled.h2`
  font-family: "Canela";
  font-weight: 100;
  font-size: 4rem;
  margin-top: -200px;
`

const IndexPage = () => (
  <>
    <Landing />
    <Intro>👋 Hi, I'm J; a product designer excited about connecting the dots.</Intro>
    <SEO title="j" />
    <Layout style={{
      backgroundColor: "#FFE7F0"
    }}>
    </Layout>
  </>

)

export default IndexPage
