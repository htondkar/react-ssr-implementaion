import React from 'react'
import { renderRoutes } from 'react-router-config'

import { fetchCurrentUserThunk } from './actions/actionCreators'
import Header from './components/Header'

import './global-styles.css'

const App = ({ route: { routes: childRoutes } }) => (
  <main>
    <Header />
    {renderRoutes(childRoutes)}
  </main>
)

App.preLoadProps = ({ dispatch }) => dispatch(fetchCurrentUserThunk())

export default App
