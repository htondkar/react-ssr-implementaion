import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'

const routeDefinitions = [
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

export default routeDefinitions
