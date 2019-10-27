import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { withRouter } from 'react-router-dom'
import { data } from './data'

const BlockStyled = styled.div`
   min-height: 584px;
   margin: 30px 0;
   
   background: #FFFFFF;
   border-radius: 10px;
   
   .subjects-block{
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
      margin-bottom: 24px;
   }
   
   .subjects-container {
     display: flex;
     flex-direction: row;
     flex-wrap: wrap;
     justify-content: space-between;
     margin: -20px;
   }

   .subjects-item {
      width: 200px;
      height: 200px;
      margin: 20px;
      padding: 38px 8px 16px;
      
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      
      background: #2665C5;
      border-radius: 10px;
      border: 0;
      color: #FFFFFF;
      
      transition: background 0.2s;
      
      &:hover {
        background: #3e7cda;
        text-decoration: none;
      }
      
      &:active {
          background: #2158ab;
      }
      
      &:disabled {
        background: #466ca4;
        cursor: not-allowed;
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
     .header {
        text-align: center;
     }
     
     .subjects-container {
       flex-direction: column;
       align-items:center;
     }
   }
`

class SubjectsBlock extends Component {
  render () {
    const { history } = this.props

    return (
      <BlockStyled>
        <div className='subjects-block'
        >
          <div className='header'>Предметы</div>
          <div className='subjects-container'>
            {data.map((item, i) => {
              const disabled = item.title !== 'Математика'

              const handleClick = !disabled ? () => {
                history.push('/math')
              } : () => {}

              return <button
                key={i}
                onClick={handleClick}
                className='subjects-item'
                disabled={disabled}
              >
                <img className='' src={item.img} />
                <div className='title'>{item.title}</div>
              </button>
            })}
          </div>
        </div>
      </BlockStyled>
    )
  }
}

SubjectsBlock.propTypes = {
  history: PropTypes.object.isRequired
}

export default withRouter(SubjectsBlock)
