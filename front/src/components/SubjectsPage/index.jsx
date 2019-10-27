import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import styled from 'styled-components'
import Header from '../Header'
import UserInfoBlock from '../UserInfoBlock'
import SubjectsBlock from '../SubjectsBlock'

const PageStyled = styled.div`
    min-height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    overflow: auto;

    .subjects-container {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      align-items: stretch;
    }
    
    @media(max-width: 600px) {
      .subjects-container .row {
        flex-direction: column
      }
    }
`

class TopicsPage extends Component {
  render () {
    return (
      <PageStyled>
        <Header />
        <Container className='subjects-container'>
          <Row>
            <Col xs='12' sm='3'><UserInfoBlock /></Col>
            <Col xs='12' sm='9'><SubjectsBlock /></Col>
          </Row>
        </Container>
      </PageStyled>
    )
  }
}

export default TopicsPage
