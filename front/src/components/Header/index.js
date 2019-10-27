import React, { Component } from 'react'
import styled from 'styled-components'
import { Container } from 'reactstrap'

import logo from './logo.svg'
import uCoin from './u-coin.svg'

const HeaderStyled = styled.header`
    height: 70px;
    width: 100%;
    background: #242E66;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    
    .container {
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
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
    
     @media(max-width: 600px) {
        .coins {
            text-align: right;
            font-size: 14px;
            
            img { display: none; }
            
            span {
                font-size: 12px;
            }
     }
`

class Header extends Component {
  render () {
    return (
      <HeaderStyled>
        <Container>
          <a href='/'><img src={logo} alt='' /></a>
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
