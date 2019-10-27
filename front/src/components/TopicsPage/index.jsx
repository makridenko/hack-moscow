import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import styled from 'styled-components'
import TopicsBlock from '../TopicsBlock'
import Header from '../Header'
import UserInfoBlock from '../UserInfoBlock'
import FirstScenario from '../FirstScenario'

const PageStyled = styled.div`
    min-height: 100vh;
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
    
     @media(max-width: 600px) {
      .topics-container .row {
        flex-direction: column
      }
    }
`

class TopicsPage extends Component {
  render () {
    return (
      <PageStyled>
        <Header />
        <Container className='topics-container'>
          <Row>
            <Col xs='12' sm='3'><UserInfoBlock {...this.props}/></Col>
            {localStorage.getItem('USER_EXP') === "0" ?
              <Col xs='12' sm='9'><FirstScenario /></Col>
              :
              <Col xs='12' sm='9'><TopicsBlock /></Col>
            }
          </Row>
        </Container>
      </PageStyled>

    )
  }
}

export default TopicsPage
