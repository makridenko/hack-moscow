import React from 'react'
import './App.css'

import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
// import ArticleBlock from './components/ArticleBlock'
import TopicsPage from './components/TopicsPage'
import ArticlePage from './components/ArticlePage'
import TestPage from './components/TestPage'
import AuthPage from './components/AuthPage'
import SubjectsPage from './components/SubjectsPage'

function App () {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={SubjectsPage}/>
        <Route exact path='/auth' component={AuthPage}/>
        <Route exact path='/math' component={TopicsPage}/>
        <Route exact path='/math/:topic' component={ArticlePage}/>
        <Route exact path='/math/:topic/test' component={TestPage}/>
      </Switch>
    </Router>
  )
}

export default App
