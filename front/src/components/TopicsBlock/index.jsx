import React, { Component } from 'react'
import { QueryRenderer, graphql } from 'react-relay'
import styled from 'styled-components'

import { Link}  from 'react-router-dom'

import {
  Collapse,
  ListGroup,
  ListGroupItem,
} from 'reactstrap';

import environment from '../../Environment'

const MyQuery = graphql`
query TopicsBlockQuery {
  units {
    edges {
      node {
        id
        title
        subject {
          title
        }
        lessonSet {
          edges {
            node {
              id
              title
            }
          }
        }
      }
    }
  }
}
`

const BlockStyled = styled.div`
   height: 584px;
   margin: 30px 0;

   background: #FFFFFF;
   border-radius: 10px;

   .topics-block {
     display: flex;
     flex-direction: column;
     justify-content: space-around;
     align-items: center;
     padding: 25px 70px;
   }

   .header {
      width: 100%;
      font-weight: bold;
      font-size: 30px;
      margin-bottom: 10px;
   }

   .topic-item {
      width: 100%;
      height: 63px;
      margin: 10px 0;
      padding: 0 30px;

      display: flex;
      justify-content: space-between;
      align-items: center;

      background: #2665C5;
      border-radius: 10px;
      color: #FFFFFF;

      transition: background 0.2s;

      &:hover {
        background: #3e7cda;
        text-decoration: none;
      }

      &:active {
          background: #2158ab;
      }

     .title {
        font-weight: bold;
        font-size: 18px;
     }

     .link {
        color: #ffffff;
        text-decoration: underline;
        font-weight: 300;
        font-size: 18px;
     }
   }

`

class TopicsBlock extends Component {

  state = {
    toggle: false,
  }

  toggleCollapse = () => {
    this.setState({
      toggle: !this.state.toggle
    })
  }

  render () {
    return (
      <BlockStyled>
        <QueryRenderer
          environment={environment}
          query={MyQuery}
          render={({ error, props }) => {
            if (error) {
              return <div>{error.message}</div>
            } else if (props) {
              return (
                <div className='topics-block'>
                  <div className='header'>Математика</div>
                  {props.units.edges.map(({ node }) =>
                    <>
                      <button
                        key={node.id}
                        className='topic-item'
                        onClick={() => this.toggleCollapse()}
                      >
                        <div className='title'>{node.title}</div>
                        <span className='link'>подробнее</span>
                      </button>
                      <Collapse isOpen={this.state.toggle}>
                        <ListGroup>
                          {node.lessonSet.edges.map(({ node }) =>
                            <ListGroupItem key={node.id}>
                              <Link to={`/topics/${node.id}/test`}>{node.title}</Link>
                            </ListGroupItem>
                          )}
                        </ListGroup>
                      </Collapse>
                    </>
                  )}
                </div>
              )
            }
            return <div>Loading</div>
          }}
        />
      </BlockStyled>
    )
  }
}

export default TopicsBlock
