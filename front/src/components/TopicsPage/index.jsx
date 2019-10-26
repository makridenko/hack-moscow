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

    .topics-container {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      align-items: stretch;
    }
`

class TopicsPage extends Component {
  render () {
    return (
      <PageStyled>
        <Header />
        <Container className='topics-container'>
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
