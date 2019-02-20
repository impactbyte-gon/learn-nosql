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

const haidar = new User({
  name: 'Haidar',
  age: 25,
  email: 'mhaidarhanif@gmail.com'
})

haidar.save().then(() => console.log('Created new user'))
