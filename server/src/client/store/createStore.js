import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const middlewares = [thunk]

const preLoadedState = window.__PRELOADED_STATE__
delete window.__PRELOADED_STATE__

export const store = createStore(
  rootReducer,
  preLoadedState,
  composeEnhancers(applyMiddleware(...middlewares))
)
