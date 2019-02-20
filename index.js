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

// use async if we want to use await inside the function
app.get('/users', async (req, res) => {
  const users = await User.find() // slow process
  // wait until User.find() is finished using await

  // fast process
  res.send({
    message: 'List of all users',
    users: users
  })
})

app.post('/users', async (req, res) => {
  const newUser = new User({
    name: req.body.name || null,
    age: req.body.age || null,
    email: req.body.email || null,
    birthDate: req.body.birthDate || null
  })

  // wait until newUser is saved into the database
  await newUser.save() // slow process

  // send response only after newUser.save() is finished
  res.send({
    message: 'Created new user',
    newUser: newUser
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
