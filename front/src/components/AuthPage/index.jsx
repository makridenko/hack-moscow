import React, { Component } from 'react'
import styled from 'styled-components'
import {
  Input,
  Label,
  Button
} from 'reactstrap'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

/* Mutations */
import SignInUserMutation from '../../mutations/SignInUserMutation'

const StyledSignIn = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url('/images/library.png');
  background-size: cover;
  background-blend-mode: screen;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  .auth-container {
    width: 370px;
    max-width: 100%;
    height: 346px;
    
    padding: 20px 40px 32px;

    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    
    input {
      width: 100%;
    }
  }
  
  .title {
    width: 100%;
    text-align: center;
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 25px;
  }
  
  .btn-signin {
     width: 100%;
     height: 50px;

     background: #628FEB;
     box-shadow: inset 0px -2px 6px rgba(0, 0, 0, 0.1);
     border-radius: 10px;
     border: 0;
     
     margin-top: 30px;
     
     font-weight: bold;
     font-size: 16px;
     color: #FFFFFF;
  }
`

class SignIn extends Component {
  state = {
    username: '',
    password: ''
  }

  confirm = () => {
    const { username, password } = this.state
    SignInUserMutation(username, password,
      (result, id, token, username) => {
        if (result) {
          this.props._saveUserData(id, token, username)
          this.props.history.push(`/subjects/${username}`)
        } else {
          alert('Error')
        }
      })
  }

  render () {
    return (
      <StyledSignIn>
        <img src='/logo.svg' alt='Evolution' style={{marginBottom: 66}} />
        <div className='auth-container'>
          <div className='title'>Войти на сайт</div>
          <Label>имя пользователя</Label>
          <Input
            type="text"
            value={this.state.username}
            onChange={(e) => this.setState({ username: e.target.value })}
          />
          <Label>пароль</Label>
          <Input
            type="password"
            value={this.state.password}
            onChange={(e) => this.setState({ password: e.target.value })}
          />
          <Button
            className='btn-signin'
            onClick={() => this.confirm()}
          >
            Войти
          </Button>
        </div>
      </StyledSignIn>
    )
  }
}

SignIn.propTypes = {
  _saveUserData: PropTypes.func,
  history: PropTypes.object.isRequired
}

export default withRouter(SignIn)
