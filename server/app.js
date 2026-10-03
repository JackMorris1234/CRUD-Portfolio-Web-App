const express = require('express')
const mongoose = require('mongoose')
const config = require('./Utils/config')
const logger = require('./Utils/logger')
const middleware = require('./Utils/middleware')
const notesRouter = require('./Controllers/projects')
require('dotenv').config()
const app = express()


logger.info('connecting to', config.MONGODB_URI)

mongoose
  .connect(config.URL, { family: 4 })
  .then(() => {
    logger.info('connected to MongoDB')
  })
  .catch((error) => {
    logger.error('error connection to MongoDB:', error.message)
  })

app.use(express.static('../client/dist'))
app.use(express.json())
app.use(middleware.requestLogger)
app.use('/projects', notesRouter)

app.get('/', (req, res) => {
  res.json({
    message: 'Resume Portfolio API is running'
  })
})



app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app
