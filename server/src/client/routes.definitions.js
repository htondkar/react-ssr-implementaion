import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import App from './App'

const dashboardRoutes = [
  {
    path: '/',
    component: HomePage,
    exact: true,
  },
  {
    path: '/about',
    component: AboutPage,
  },
]

const routeDefinitions = [
  {
    component: App,
    routes: dashboardRoutes,
  },
]

export default routeDefinitions
