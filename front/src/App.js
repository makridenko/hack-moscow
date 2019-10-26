import React from 'react'
import './App.css'

import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
// import ArticleBlock from './components/ArticleBlock'
import TopicsPage from './components/TopicsPage'
import ArticlePage from './components/ArticlePage'

function App () {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={TopicsPage}/>
        {/* <Route path='/topics' component={TopicsPage}/> */}
        <Route path='/topics/:topic' component={ArticlePage}/>
      </Switch>
    </Router>
  )
}

export default App
