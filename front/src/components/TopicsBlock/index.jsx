import React, { Component } from 'react'
import { QueryRenderer, graphql } from 'react-relay'
import styled from 'styled-components'

import environment from '../../Environment'

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
   background: #FFFFFF;
   border-radius: 10px;
   margin: 30px 0;

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
                  {props.lessons.edges.map(({ node }) =>
                    <div key={node.id}
                    >
                      {node.title}
                    </div>)}
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
