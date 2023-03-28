const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const fs = require('fs')
const mealsRouter = require('./api/meals')
const reservationsRouter = require('./api/reservations')

app.use(express.json())
app.use('/api/meals', mealsRouter)
app.use('/api/reservations', reservationsRouter)

app.get('/', (req, res) => {
  res.send(' go go go ')
})

app.get('/search', (req, res) => {
  const q = req.query.q
  const documents = JSON.parse(fs.readFileSync('documents.json'))
  const filteredDocuments = q
    ? documents.filter((doc) =>
        Object.values(doc).some((value) => value.toString().includes(q))
      )
    : documents

  res.json(filteredDocuments)
})

app.get('/documents/:id', (req, res) => {
  const id = parseInt(req.params.id, 10)
  const documents = JSON.parse(fs.readFileSync('documents.json'))
  const document = documents.find((doc) => doc.id === id)

  if (document) {
    res.json(document)
  } else {
    res.status(404).send('Not Found')
  }
})

app.post('/search', (req, res) => {
  const q = req.query.q
  const fields = req.body.fields
  const documents = JSON.parse(fs.readFileSync('documents.json'))

  if (q && fields) {
    res.status(400).send('Camon, lets pay more attention ')
    return
  }

  const filteredDocuments = q
    ? documents.filter((doc) =>
        Object.values(doc).some((value) => value.toString().includes(q))
      )
    : fields
    ? documents.filter((doc) =>
        Object.entries(fields).some(([key, value]) => doc[key] === value)
      )
    : documents

  res.json(filteredDocuments)
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
