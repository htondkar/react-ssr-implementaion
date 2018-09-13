import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../client/reducers/index'

export const storeFactory = (
  reducers = rootReducer,
  initialState = {},
  middlewares = [thunk]
) => createStore(reducers, initialState, applyMiddleware(...middlewares))
