import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { store } from './store/createStore'
import Routes from './Routes'

const attachToDOM = store =>
  ReactDOM.hydrate(
    <Provider store={store}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Provider>,
    document.getElementById('root')
  )

attachToDOM(store)
