import React, { Component } from 'react'
import styled from 'styled-components'
import { Container } from 'reactstrap'

import logo from './logo.svg'
import uCoin from './u-coin.svg'

const HeaderStyled = styled.div`
    height: 70px;
    width: 100%;
    background: #242E66;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    
    .container {
      height: 100%;
      display: flex;
      justify-content: space-between;
    }
    
    .coins {
      display: flex;
      align-items: center;
      font-weight: 600;
      font-size: 16px;
      
      color: #FFFFFF;
      
      img {
        margin-right: 24px;
      }
      
      span {
        font-size: 14px;

        color: #FFCC45;
        cursor: pointer;
        text-decoration-line: underline;
      }
     
    }
`

class Header extends Component {
  render () {
    return (
      <HeaderStyled>
        <Container>
          <img src={logo} alt='' />
          <div className='coins'>
            <img src={uCoin} alt='u-coin' />
            <div>
              У тебя 64 u-coin<br/>
              <span>Потратить</span>
            </div>
          </div>
        </Container>
      </HeaderStyled>
    )
  }
}

export default Header
