import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Home from './views/home'
import ExtendedPortfolio from './views/extended-portfolio'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Home} exact path="/" />
        <Route component={ExtendedPortfolio} exact path="/extended-portfolio" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
