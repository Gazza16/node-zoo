const express = require('express')

const server = express()

server.use(require('body-parser').json())
server.use('/', require('./routes'))

// Handles any thrown errors
// Outputs as json with key `errors`
server.use((error, req, res, next) => {
  res.status(error.status || 500)
  res.json({ errors: [error.message] })
})

const port = process.env.PORT || 7000
server.listen(port, () => {
  console.log('Started on port', port)
})
