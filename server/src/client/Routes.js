import React from 'react'
import { Route } from 'react-router-dom'

import Home from './components/Home'
import About from './components/About'

const Routes = () => (
  <div>
    <Route path="/" exact={true} component={Home} />
    <Route path="/about" exact={true} component={About} />
  </div>
)

export default Routes
