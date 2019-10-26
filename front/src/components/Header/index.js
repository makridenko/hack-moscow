import React, { Component } from 'react'
import styled from 'styled-components'
import logo from './logo.svg'

const HeaderStyled = styled.div`
    height: 70px;
    width: 100%;
    background: #242E66;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

class Header extends Component {
  render () {
    return (
      <HeaderStyled>
        <img src={logo} alt='' />
      </HeaderStyled>
    )
  }
}

export default Header
