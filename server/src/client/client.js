import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

import routeDefinitions from './routes.definitions'
import { store } from './store/createStore'

const attachToDOM = store =>
  ReactDOM.hydrate(
    <Provider store={store}>
      <BrowserRouter>{renderRoutes(routeDefinitions)}</BrowserRouter>
    </Provider>,
    document.getElementById('root')
  )

attachToDOM(store)
