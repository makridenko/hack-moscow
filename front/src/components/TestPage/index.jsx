import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Container } from 'reactstrap'
import styled from 'styled-components'
import { graphql, QueryRenderer } from 'react-relay'

import environment from '../../Environment'

import Header from '../Header'
import TestBlock from '../TestBlock'

const TestPageQuery = graphql`
query TestPageQuery($id: ID!) {
  tasks(lesson_Id: $id) {
    edges {
      node {
        description
        lesson {
          id
          title
        }
        answerSet {
          edges {
            node {
              title
              isTrue
            }
          }
        }
      }
    }
  }
}
`

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
    const id = this.props.match.params.id
    return (
      <PageStyled>
        <Header />
        <Container className='topics-container'>
          <QueryRenderer
            environment={environment}
            query={TestPageQuery}
            variables={{
              lesson_Id: id
            }}
            render={({ error, props }) => {
              if (error) {
                return <div>{error.message}</div>
              } else if (props) {
                <TestBlock
                  {...props}
                />
              }
            }}
          />
        </Container>
      </PageStyled>
    )
  }
}

TestPage.propTypes = {
  match: PropTypes.object.isRequired
}

export default TestPage
