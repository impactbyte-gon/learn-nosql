const Task = require('./model')

// tasks functions
const tasks = {
  getAllTasks: async (req, res) => {
    res.send({
      message: 'List of all tasks',
      tasks: await Task.find()
    })
  }
}

module.exports = tasks
