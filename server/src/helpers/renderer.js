import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config'

// important: to protect against XSS attacks, use serialize to serialize the state
import serialize from 'serialize-javascript'

import routeDefinitions from '../client/routes.definitions'

export default function renderer(req, store) {
  const routerContext = {}

  const content = renderToString(
    <Provider store={store}>
      <StaticRouter context={routerContext} location={req.path}>
        {renderRoutes(routeDefinitions)}
      </StaticRouter>
    </Provider>
  )

  return `
    <html>
      <head></head>
      <body>
        <div id="root">${content}</div>

        <script>
          window.__PRELOADED_STATE__ = ${serialize(store.getState())}
        </script>

        <script src="bundle.js"></script>
      </body>
    </html>
  `
}
