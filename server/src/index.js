import 'babel-polyfill'
import express from 'express'
import renderer from './helpers/renderer'
import { storeFactory } from './helpers/serverStoreFactory'
import { matchRoutes } from 'react-router-config'
import routeDefinitions from './client/routes.definitions'

const PORT = 3000
const app = express()

app.use(express.static('public'))

app.get('*', async (req, res) => {
  const store = storeFactory()

  const componentsToRenderForRoute = matchRoutes(routeDefinitions, req.path)

  const promises = componentsToRenderForRoute.map(match => {
    const { preLoadProps } = match.route.component
    return preLoadProps ? preLoadProps(store) : null
  })

  await Promise.all(promises)

  res.send(renderer(req, store))
})

app.listen(PORT, () => {
  console.log('listening on port:', PORT)
})
