const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const fs = require('fs')
const mealsRouter = require('./src/backend/api/meals')
const reservationsRouter = require('./src/backend/api/reservations')

app.use(express.json())
app.use('/api/meals', mealsRouter)
app.use('/api/reservations', reservationsRouter)

app.get('/', (req, res) => {
  res.send(' go go go ')
})

app.get('/search', (req, res) => {
  const q = req.query.q
})

app.get('/documents/:id', (req, res) => {
  const id = req.params.id
})

app.post('/search', (req, res) => {
  const q = req.query.q
  const fields = req.body.fields
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
