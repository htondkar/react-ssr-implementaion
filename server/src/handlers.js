import renderer from './helpers/renderer'
import { storeFactory } from './helpers/serverStoreFactory'
import { matchRoutes } from 'react-router-config'
import routeDefinitions from './client/routes.definitions'

export const renderHandler = async (req, res) => {
  const store = storeFactory(req)

  const componentsToRenderForRoute = matchRoutes(routeDefinitions, req.path)

  const promises = componentsToRenderForRoute.map(match => {
    const { preLoadProps } = match.route.component
    return preLoadProps ? preLoadProps(store) : null
  })

  await Promise.all(promises)

  res.send(renderer(req, store))
}
