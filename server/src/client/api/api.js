import axios from 'axios'

export class Api {
  constructor(agent, options) {
    this.http = agent.create(options)
  }

  fetchUsers() {
    return this.http.get('/users')
  }
}

const ApiInstance = new Api(axios, { baseURL: '/api' })

export default ApiInstance
