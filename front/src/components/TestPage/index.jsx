import React, { Component } from 'react'
import { Container } from 'reactstrap'
import styled from 'styled-components'
import Header from '../Header'
import TestBlock from '../TestBlock'

const PageStyled = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    overflow: auto;

    .topics-container {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      align-items: stretch;
    }
`

class TestPage extends Component {
  render () {
    return (
      <PageStyled>
        <Header />
        <Container className='topics-container'>
          <TestBlock />
        </Container>
      </PageStyled>
    )
  }
}

export default TestPage
