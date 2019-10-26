import React, { Component } from 'react'
import styled from 'styled-components'
import {
  Jumbotron,
  Input,
  Label,
  Button
} from 'reactstrap'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

/* Mutations */
import SignInUserMutation from '../../mutations/SignInUserMutation'

const StyledSignIn = styled.div`
  .jumbotron {
    height: 500px;
    weight: 400px;
    margin: 2rem 30rem;
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
          this.props.history.push('/')
        } else {
          alert('Error')
        }
      })
  }

  render () {
    return (
      <StyledSignIn>
        <Jumbotron>
          <Label>username</Label>
          <Input
            type="text"
            value={this.state.username}
            onChange={(e) => this.setState({ username: e.target.value })}
          />
          <Label>password</Label>
          <Input
            type="password"
            value={this.state.password}
            onChange={(e) => this.setState({ password: e.target.value })}
          />
          <Button
            onClick={() => this.confirm()}
          >
            Sign Up
          </Button>
        </Jumbotron>
      </StyledSignIn>
    )
  }
}

SignIn.propTypes = {
  _saveUserData: PropTypes.func,
  history: PropTypes.object.isRequired
}

export default withRouter(SignIn)
