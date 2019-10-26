import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import styled from 'styled-components'
import TopicsBlock from '../TopicsBlock'
import Header from '../Header'
import UserInfoBlock from '../UserInfoBlock'

const PageStyled = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
          overflow: auto;

    .container {
      display: flex;
      flex-direction: row;
      flex-grow: 1;
      align-items: center;
    }
    
    .row {
      width: 100%;
    }
`

class TopicsPage extends Component {
  render () {
    return (
      <PageStyled>
        <Header />
        <Container>
          <Row>
            <Col xs='3'><UserInfoBlock /></Col>
            <Col xs='9'><TopicsBlock /></Col>
          </Row>
        </Container>
      </PageStyled>

    )
  }
}

export default TopicsPage
