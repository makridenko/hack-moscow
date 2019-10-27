import React, { Component } from 'react'
import { Container } from 'reactstrap'
import styled from 'styled-components'
import Header from '../Header'
import TestBlock from '../TestBlock'
import { QueryRenderer, graphql } from 'react-relay'

import environment from '../../Environment'

import FirstScenarioMutation from '../../mutations/FirstScenarioMutation'

const FirstScenarioChallengeQuery = graphql`
query FirstScenarioChallengeQuery{
  tasks(lesson_Id: "TGVzc29uTm9kZTox") {
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


export default class FirstScenarioChallenge extends Component {

  confirmScenario = (tests, lessonId) => {
    FirstScenarioMutation(tests, lessonId,
      (result, username) => {
        if (result) {
          console.log(result, username);
          return username
        } else {
          alert('Error')
        }
      })
  }

  render() {
    return (
      <PageStyled>
        <Header />
        <Container className="topics-container">
          <QueryRenderer
            environment={environment}
            query={FirstScenarioChallengeQuery}
            render={({ error, props }) => {
              if (error) {
                return <div>{error.message}</div>
              } else if (props) {
                return (
                  <TestBlock
                    {...props}
                    confirm={this.confirmScenario}
                  />
                )
              }
              return <div>Loading...</div>
            }}
          />
        </Container>
      </PageStyled>
    )
  }
}
