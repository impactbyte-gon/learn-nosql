// -----------------------------------------------------------------------------
// EXPRESS
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 8000

app.use(bodyParser.json())

// -----------------------------------------------------------------------------
// MONGOOSE
require('dotenv').config()
const mongoose = require('mongoose')

mongoose.connect(`${process.env.URL}/${process.env.DB_NAME}`, {
  useNewUrlParser: true
})

const User = mongoose.model('User', {
  name: String,
  age: Number,
  email: String
})

// -----------------------------------------------------------------------------

app.get('/', (req, res) => {
  res.send({
    message: 'Hello World'
  })
})

app.get('/users', async (req, res) => {
  res.send({
    message: 'List of all users',
    users: await User.find()
  })
})

// -----------------------------------------------------------------------------

app.listen(port, () => {
  console.log(`Express app is running on localhost:${port}`)
})
