const projectsRouter = require('express').Router()
const Project = require('../models/project')



projectsRouter.get('/', (request, response, next) => {
  console.log('getAllProjects called')
  Project
    .find({})
    .then(entries => response.json(entries))
    .catch(error => next(error))

})

projectsRouter.get('/:id', (request, response, next) => {
  console.log('getSingularProject called')
  const id=request.params.id
  Project
    .findById(id)
    .then((entry) => {
      entry ? response.json(entry) : response.status(404).end()
    })
    .catch(error => next(error))

})

projectsRouter.post('/',(request, response, next) => {
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


module.exports=projectsRouter
