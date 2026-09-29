const express = require('express')
require('dotenv').config()
const cors = require('cors')
const morgan=require('morgan')
const Project=require('./models/project.js')
const app = express()

app.use(express.static('../client/dist'))
app.use(express.json())
app.use(morgan('tiny'))
app.use(cors())

app.get('/projects', (request, response, next) => {
  console.log('getAllProjects called')
  Project
    .find({})
    .then(entries => response.json(entries))
    .catch(error => next(error))

})

app.get('/projects/:id', (request, response, next) => {
  console.log('getSingularProject called')
  const id=request.params.id
  Project
    .findByID(id)
    .then((entry) => {
      entry ? response.json(entry) : response.status(404).end()
    })
    .catch(error => next(error))

})

app.post('/projects',(request, response, next) => {
  const body=request.body

  if(!body){
    return response.status(400).json({ error: 'content missing' })
  }

  const project=new Project({
    Title:body.title,
    body:body.body,
    Goal:body.goal,
    Outcomes:body.outcomes,
    card_blurb:body.card_blurb,
    github:body.git,
    id:body.id
  })
  project
    .save()
    .then(savedProject => response.json(savedProject))
    .catch(error => next(error))
})



app.get('/', (req, res) => {
  res.json({
    message: 'Resume Portfolio API is running'
  })
})





const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

const errorHandler = (error, request, response, next) => {
  console.error('backend error handling: ', error.message)

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  } else if (error.name === 'ValidationError') {
    return response.status(400).json({ error: error.message })
  }
  next(error)
}
app.use(errorHandler)




const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})