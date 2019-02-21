require('dotenv').config()
const mongoose = require('mongoose')

mongoose.connect(`${process.env.URL}/${process.env.DB_NAME}`, {
  useNewUrlParser: true
})

// Task model => tasks collection
const Task = mongoose.model('Task', {
  text: String,
  completed: Boolean,
  date: Date
})

module.exports = Task
