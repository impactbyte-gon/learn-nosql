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

// User model => users collection
const User = mongoose.model('User', {
  name: String,
  age: Number,
  email: String,
  birthDate: Date
})

// Task model => tasks collection
const Task = mongoose.model('Task', {
  text: String,
  completed: Boolean,
  date: Date
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

app.get('/tasks', async (req, res) => {
  res.send({
    message: 'List of all tasks',
    tasks: await Task.find()
  })
})

// -----------------------------------------------------------------------------

app.listen(port, () => {
  console.log(`Express app is running on localhost:${port}`)
})
