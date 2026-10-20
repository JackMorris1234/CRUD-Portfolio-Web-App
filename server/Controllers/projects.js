const projectsRouter = require('express').Router()
const Project = require('../models/project')



projectsRouter.get('/', async (request, response, next) => {
  console.log('getAllProjects called')
  try{
    const projects=await Project.find({})
    response.json(projects)
  }catch(error){
    next(error)
  }
})

projectsRouter.get('/:id', async (request, response, next) => {
  console.log('getSingularProject called')
  try{
    const id=request.params.id
    const entry=await Project.findById(id)
    if(entry){
      response.json(entry)
    }else{
      response.status(404).end()
    }
  }catch(error){
    next(error)
  }
})

projectsRouter.post('/', async (request, response, next) => {
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
  try{
    const savedProject=project.save()
    if(savedProject){
      response.json(savedProject)
    }else{
      response.status(500).json({ error : 'something went wrong' })
    }
  }catch(error){
    next(error)
  }
})


module.exports=projectsRouter
