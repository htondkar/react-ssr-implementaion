import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config'

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
          window.__PRELOADED_STATE__ = ${JSON.stringify(store.getState()).replace(
            /</g,
            '\\u003c'
          )}
        </script>

        <script src="bundle.js"></script>
      </body>
    </html>
  `
}
