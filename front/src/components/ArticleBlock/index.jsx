import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import { QueryRenderer, graphql } from 'react-relay'
import styled from 'styled-components'

// import environment from '../../Environment'
// import ReactMarkdown from 'react-markdown'
import { withRouter } from 'react-router-dom'

import arrowBack from './backArrow.svg'

/*
const MyQuery = graphql`
query ArticleBlockQuery {
  lessons {
    edges {
      node {
        id
        title
        theory
      }
    }
  }
}
`
*/

const BlockStyled = styled.div`
   position: relative;
   margin: 30px 0;

   background: #FFFFFF;
   border-radius: 10px;

   .header {
      width: 100%;
      font-weight: bold;
      font-size: 30px;
      margin-bottom: 8px;
   }

    .subheader {
      width: 100%;
      font-weight: bold;
      font-size: 16px;
      margin-bottom: 16px;

      color: rgba(0, 0, 0, 0.45);
   }

   .article-block {
     display: flex;
     flex-direction: column;
     justify-content: space-around;
     align-items: center;
     padding: 25px 70px;

      width: 800px;
      margin: 24px auto;
      padding: 0 30px;

      display: flex;
      justify-content: space-between;
      align-items: center;



      &:hover {
        background: #FFFFFF;
      }

     .title {
        font-weight: bold;
        font-size: 18px;
     }

     .text {
        width: 100%;
        min-height: 371px;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
        background: #F8F8F8;
        border-radius: 10px;
        padding: 20px 40px;

        font-weight: 500;
        font-size: 16px;
     }

     .btn-nxt {
        width: 204px;
        height: 45px;
        margin-top: 34px;
        background: #628FEB;
        border-radius: 10px;
        border: 0;
        outline: none;
        color: #FFFFFF;
        font-weight: bold;
        font-size: 16px;

        letter-spacing: -0.005em;

        &:hover {
          background: #789fed;
        }

        &:active {
          background: #4b7fe7;
        }
     }



     .link {
        color: #ffffff;
        text-decoration: underline;
        font-weight: 300;
        font-size: 18px;
     }
   }

  .btn-back {
      position: absolute;
      left: 40px;
      bottom: 32px;
      display: flex;
      align-items: center;
      border: 0;
      background: transparent;
      font-weight: 600;
      font-size: 14px;
      outline: none;

      color: #AFB9D2;

      img {
        margin-right: 10px;
      }
  }

`

class ArticleBlock extends Component {
  render () {
    const { history } = this.props

    return (
      <BlockStyled>
        {/*<QueryRenderer
          environment={environment}
          query={MyQuery}
          render={({ error, props }) => {
            if (error) {
              return <div>{error.message}</div>
            } else if (props) {
              return (
                <div className='article-block'>
                  {props.lessons.edges.map(({ node }) =>
                    <React.Fragment key={node.id}>
                      <div className='header'>
                        {node.title}
                      </div>
                      <div className='subheader'>
                          Теория
                      </div>

                      <ReactMarkdown key={node.id} className='text'
                        source={node.theory}/>
                      <button className='btn-nxt' onClick={() => history.push(`/topics/${node.title}/test`)} >Дальше</button>
                    </React.Fragment>
                  )}

                </div>
              )
            }
            return <div>Loading</div>
          }}
        />
        */}
        <button className='btn-back' onClick={history.goBack}><img src={arrowBack} alt='' /> Назад</button>
      </BlockStyled>
    )
  }
}

ArticleBlock.propTypes = {
  history: PropTypes.object.isRequired
}

export default withRouter(ArticleBlock)
