import React from 'react'
import styled from '@emotion/styled'
import { Link } from "gatsby"

let View = styled.div`
  height: 80vh;
  background-color: #FFE7F0;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

let Name = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1em;
`

let Title = styled.h1`
  font-size: 4rem;
`

const Landing = () => (
  <View>
    <Link to='/'>
      <Name>
        <Title>Jacob</Title><Title>Lapworth</Title>
      </Name>
    </Link>
  </View>

);

export default Landing