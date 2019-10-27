import React, { Component } from 'react'
// import styled from 'styled-components'
import * as PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

// const BlockStyled = styled.div`
//    height: 584px;
//    margin: 30px 0;
//
//    background: #FFFFFF;
//    border-radius: 10px;
//
//    .topics-block {
//      display: flex;
//      flex-direction: column;
//      justify-content: space-around;
//      align-items: center;
//      padding: 25px 70px;
//    }
//
//    .header {
//       width: 100%;
//       font-weight: bold;
//       font-size: 30px;
//       margin-bottom: 10px;
//    }
//
//    .topic-item {
//       width: 100%;
//       height: 63px;
//       margin: 10px 0;
//       padding: 0 30px;
//
//       display: flex;
//       justify-content: space-between;
//       align-items: center;
//
//       background: #2665C5;
//       border-radius: 10px;
//       color: #FFFFFF;
//
//       transition: background 0.2s;
//
//       &:hover {
//         background: #3e7cda;
//         text-decoration: none;
//       }
//
//       &:active {
//           background: #2158ab;
//       }
//
//      .title {
//         font-weight: bold;
//         font-size: 18px;
//      }
//
//      .link {
//         color: #ffffff;
//         text-decoration: underline;
//         font-weight: 300;
//         font-size: 18px;
//      }
//    }
//
// `

class Question extends Component {
  state = {
    step: 0,
    checkUser: [],
    lessonId: ''
  }

  nextStep = () => {

  }

  render () {
    const { step, checkUser } = this.state
    const { edges, history } = this.props
    const testLength = edges.length

    console.log('!!!');

    if (step === testLength) {
      this.props.confirm(
        this.state.lessonId,
        this.state.checkUser
      )
      history.push(`/user/${localStorage.getItem('USER_NAME')}`)
      return 0
    } else {
      const { node } = edges[step]
      return (
        <>
          <div className='header'>{node.lesson.title}</div>
          <div className='subheader'>{`Вопрос ${step + 1}`}</div>
          <div className='text' >
            {node.description}
          </div>
          <div className='statusBar'>
          Выберите вариант ответа:
          </div>

          {node.answerSet.edges.map((answer, i) =>
            <div key={i} className='answer-item'
              onClick={() => {
                this.setState({
                  checkUser: [...checkUser, answer.node.isTrue ? 1 : 0],
                  lessonId: node.lesson.id
                })
                setTimeout(() => this.setState({ step: step + 1 }), 1500)
              }}>
              {answer.node.title}
            </div>
          )}
        </>
      )
    }
  }
}

Question.propTypes = {
  edges: PropTypes.array.isRequired,
  history: PropTypes.object.isRequired,
  confirm: PropTypes.func.isRequired,
}

export default withRouter(Question)
