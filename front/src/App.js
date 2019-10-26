import React from 'react'
import './App.css'

import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
// import TopicsBlock from './components/TopicsBlock'
import TopicsPage from './components/TopicsPage'

function App () {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={TopicsPage}/>
        {/* <Route path='/topics' component={TopicsPage}/> */}
        {/* <Route path='/topics/:topic' component={SignInPage}/> */}
      </Switch>
    </Router>
  )
}

export default App
