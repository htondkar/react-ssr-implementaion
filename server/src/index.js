import 'babel-polyfill'
import express from 'express'
import { renderHandler } from './handlers'
import proxy from 'express-http-proxy'

// initialize
const PORT = 3000
const app = express()

// send all /api request to the real API
app.use(
  '/api',
  proxy('https://react-ssr-api.herokuapp.com', {
    proxyReqOptDecorator(options) {
      options.headers['x-forward-host'] = 'localhost:3000'
      return options
    },
  })
)

// serve the static files
app.use(express.static('public'))

// render app for all other routes
app.get('*', renderHandler)

app.listen(PORT, () => console.log('listening on port:', PORT))
