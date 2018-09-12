import express from 'express'
import renderer from './helpers/renderer'

const PORT = 3000
const app = express()

app.use(express.static('public'))

app.get('*', (req, res) => res.send(renderer(req)))

app.listen(PORT, () => {
  console.log('listening on port:', PORT)
})
