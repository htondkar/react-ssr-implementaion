import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../client/reducers/index'

const defaultState = {
  users: [],
}

export const storeFactory = (
  initialState = defaultState,
  reducers = rootReducer,
  middlewares = [thunk]
) => createStore(reducers, initialState, applyMiddleware(...middlewares))
