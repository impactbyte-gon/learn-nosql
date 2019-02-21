const User = require('./model')

// users functions
const users = {
  // use async if we want to use await inside the function
  getAllUsers: async (req, res) => {
    const users = await User.find() // slow process
    // wait until User.find() is finished using await

    // fast process
    res.send({
      message: 'List of all users',
      users: users
    })
  },

  createNewUser: async (req, res) => {
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
  },

  deleteAllUsers: async (req, res) => {
    // delete all users
    await User.deleteMany()

    res.send({
      message: 'Deleted all users'
    })
  },

  deleteOneUserById: async (req, res) => {
    // delete one user by id from req.params
    await User.deleteOne({ _id: req.params.id })

    res.send({
      message: 'Deleted one user with id',
      id: req.params.id
    })
  }
}

module.exports = users
