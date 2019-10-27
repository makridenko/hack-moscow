import React, { Component } from 'react'
import './App.css'

import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
// import ArticleBlock from './components/ArticleBlock'
import TopicsPage from './components/TopicsPage'
import ArticlePage from './components/ArticlePage'
import SubjectsPage from './components/SubjectsPage'
import TestPage from './components/TestPage'
import AuthPage from './components/AuthPage'
import FirstScenarioChallenge from './components/FirstScenarioChallenge'

import { ROLE } from './constants'

const { USER, ANONYM } = ROLE

export default class App extends Component {
  getRole = (userToken) => {
    if (typeof userToken !== 'string') {
      return ANONYM
    }

    if (userToken === 'undefined' || userToken === '') {
      return ANONYM
    }

    return USER
  }

  constructor () {
    super()

    this.state = {
      userToken: localStorage.getItem('USER_TOKEN'),
      userId: localStorage.getItem('USER_ID'),
      username: localStorage.getItem('USER_NAME'),
      role: this.getRole(
        localStorage.getItem('USER_TOKEN'),
        localStorage.getItem('USER_ID')
      )
    }
  }

  saveUserData = (id, token, username) => {
    localStorage.setItem('USER_ID', id)
    localStorage.setItem('USER_TOKEN', token)
    localStorage.setItem('USER_NAME', username)
    this.setState({
      userId: id,
      userToken: token,
      username: username,
      role: USER
    })
  }

  logOut = () => {
    localStorage.setItem('USER_ID', '')
    localStorage.setItem('USER_TOKEN', '')
    localStorage.setItem('USER_NAME', '')
    this.setState({
      userId: '',
      userToken: '',
      role: ANONYM
    })
  }

  render () {
    return (
      <Router>
        <Switch>
          <Route exact path="/scenario/first" component={() => (
            <FirstScenarioChallenge
            />
          )}/>
          <Route exact path='/sign_in' component={() => (
            <AuthPage
              _saveUserData={this.saveUserData}
            />
          )}/>
          <Route exact path='/user/:username' component={(props) => (
            <TopicsPage
              {...props}
            />
          )}/>
          <Route exact path='/subjects/:username' component={SubjectsPage}/>

          <Route exact path='/topics/:id' component={ArticlePage}/>
          <Route exact path='/topics/:topic/test' component={TestPage}/>
        </Switch>
      </Router>
    )
  }
}
