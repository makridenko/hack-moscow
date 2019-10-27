import React, { Component } from 'react'
import { QueryRenderer, graphql } from 'react-relay'
import styled from 'styled-components'

import environment from '../../Environment'
import { Link } from 'react-router-dom'

const MyQuery = graphql`
query TopicsBlockQuery {
  lessons {
    edges {
      node {
        id
        title
      }
    }
  }
}
`

const BlockStyled = styled.div`
   min-height: 584px;
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
   
    @media(max-width: 600px) {
      margin: 15px 0;
    }
`

class TopicsBlock extends Component {
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
                <div className='topics-block'
                >
                  <div className='header'
                  >Матеша</div>
                  {props.lessons.edges.map(({ node }) =>
                    <Link
                      key={node.id}
                      to={`/topics/${node.title}`}
                      className='topic-item'
                    >
                      <div className='title'>{node.title}</div>
                      <span className='link'>пройти</span>
                    </Link>)}
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
