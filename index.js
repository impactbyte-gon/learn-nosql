const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 8000

app.use(bodyParser.json())

// -----------------------------------------------------------------------------

const root = require('./middlewares/index')
const users = require('./middlewares/users/index')
const tasks = require('./middlewares/tasks/index')

// root
app.get('/', root.hello)
// users
app.get('/users', users.getAllUsers)
app.post('/users', users.createNewUser)
app.delete('/users', users.deleteOneUserById)
app.delete('/users/:id', users.deleteAllUsers)
// tasks
app.get('/tasks', tasks.getAllTasks)

// -----------------------------------------------------------------------------

app.listen(port, () => {
  console.log(`Express app is running on localhost:${port}`)
})
