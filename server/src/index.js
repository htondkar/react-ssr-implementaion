import 'babel-polyfill'
import express from 'express'
import renderer from './helpers/renderer'
import { storeFactory } from './helpers/serverStoreFactory'

const PORT = 3000
const app = express()

app.use(express.static('public'))

app.get('*', (req, res) => {
  const store = storeFactory()
  res.send(renderer(req, store))
})

app.listen(PORT, () => {
  console.log('listening on port:', PORT)
})
