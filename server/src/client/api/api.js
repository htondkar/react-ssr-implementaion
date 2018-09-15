import axios from 'axios'

export class Api {
  constructor(agent, options) {
    this.http = agent.create(options)
  }

  intercept(fn) {
    this.http.interceptors.request.use(fn)
  }

  fetchCurrentUser() {
    return this.http.get('/current_user')
  }

  fetchUsers() {
    return this.http.get('/users')
  }
}

export default new Api(axios, { baseURL: '/api' })
