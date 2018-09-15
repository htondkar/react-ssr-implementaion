import Axios from 'axios'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'

import rootReducer from '../client/reducers/index'
import { Api } from '../client/api/api'

const createApiInstance = req => {
  const apiInstance = new Api(Axios, {
    baseURL: 'https://react-ssr-api.herokuapp.com/',
    headers: { cookie: req.get('cookie') || '' },
  })

  const interceptor = request => {
    console.log('Starting Request', request)
    return request
  }

  apiInstance.intercept(interceptor)

  return apiInstance
}

export const storeFactory = req => {
  const middlewares = [thunk.withExtraArgument(createApiInstance(req))]
  return createStore(rootReducer, applyMiddleware(...middlewares))
}
