import axios from 'axios'

class Api {
  constructor(agent, { baseURL = '' }) {
    this.http = agent.create({
      baseURL,
    })
  }

  fetchUsers() {
    return this.http.get('/users')
  }
}

const ApiInstance = new Api(axios, { baseURL: 'https://react-ssr-api.herokuapp.com/' })

export default ApiInstance
