import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'

const defaultState = {
  users: [],
}

export const storeFactory = (
  initialState = defaultState,
  reducers = {},
  middlewares = []
) => createStore(reducers, initialState, applyMiddleware(...middlewares))

export const store = storeFactory(defaultState, rootReducer, [thunk])
