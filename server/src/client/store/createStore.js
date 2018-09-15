import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'
import ApiInstance from '../api/api'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const middlewares = [thunk.withExtraArgument(ApiInstance)]

const preLoadedState = window.__PRELOADED_STATE__
delete window.__PRELOADED_STATE__

export const store = createStore(
  rootReducer,
  preLoadedState,
  composeEnhancers(applyMiddleware(...middlewares))
)
