import renderer from './helpers/renderer'
import { storeFactory } from './helpers/serverStoreFactory'
import { matchRoutes } from 'react-router-config'
import routeDefinitions from './client/routes.definitions'
import Axios from 'axios'
import { Api } from './client/api/api'

const createApiInstance = req => {
  const serverSideApiInstance = new Api(Axios, {
    baseURL: 'https://react-ssr-api.herokuapp.com/',
    headers: { cookie: req.get('cookie') || '' },
  })

  return serverSideApiInstance
}

export const renderHandler = async (req, res) => {
  const middlewares = [thunk.withExtraArgument(createApiInstance(req))]
  const store = storeFactory(undefined, undefined, middlewares)

  const componentsToRenderForRoute = matchRoutes(routeDefinitions, req.path)

  const promises = componentsToRenderForRoute.map(match => {
    const { preLoadProps } = match.route.component
    return preLoadProps ? preLoadProps(store) : null
  })

  await Promise.all(promises)

  res.send(renderer(req, store))
}
