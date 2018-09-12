import Home from './components/Home'
import ReactDOM from 'react-dom'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Routes from './Routes'

const attachToDOM = () =>
  ReactDOM.hydrate(
    <BrowserRouter>
      <Routes />
    </BrowserRouter>,
    document.getElementById('root')
  )

attachToDOM()
