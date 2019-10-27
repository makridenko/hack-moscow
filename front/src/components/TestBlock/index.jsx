import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

// import ReactMarkdown from 'react-markdown'
import { withRouter } from 'react-router-dom'
import Question from './Question'


const BlockStyled = styled.div`
   position: relative;
   margin: 30px 0;

   background: #FFFFFF;
   border-radius: 10px;

   .header {
      width: 100%;
      font-weight: bold;
      font-size: 24px;
      margin-bottom: 8px;
   }

    .subheader {
      width: 100%;
      font-weight: bold;
      font-size: 16px;
      margin-bottom: 30px;

      color: rgba(0, 0, 0, 0.45);
   }

   .test-block {
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
        min-height: 130px;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
        background: #F8F8F8;
        border-radius: 10px;
        padding: 52px 40px;

        font-weight: 500;
        font-size: 24px;
     }

      .statusBar {
        width: 100%;
        margin: 24px 0 10px;
        font-weight: bold;
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

    .answer-item {
      width: 100%;
      height: 40px;
      margin: 10px 0;
      padding: 0 30px;

      display: flex;
      justify-content: flex-start;
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

        font-weight: 500;
        font-size: 16px;


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

class TestBlock extends Component {
  render () {
    console.log('Test block !!!');
    return (
      <BlockStyled>
        <div className='test-block'>
          <Question
            edges={this.props.tasks.edges}
            confirm={this.props.confirm}
          />
        </div>
      </BlockStyled>
    )
  }
}

TestBlock.propTypes = {
  history: PropTypes.object.isRequired,
  tasks: PropTypes.object.isRequired,
  confirm: PropTypes.object.isRequired
}

export default withRouter(TestBlock)
