require('dotenv').config()
const MongoClient = require('mongodb').MongoClient

const url = process.env.URL // Connection URL
const dbName = process.env.DB_NAME // Database Name

const createNewUser = function(db) {
  const newUser = {
    name: 'Haidar Hanif',
    age: 25,
    email: 'mhaidarhanif@gmail.com'
  }

  db.collection('users').insert(newUser, function(err, result) {
    console.log({
      message: 'Created new user',
      result: result
    })
  })
}

// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  console.log({
    message: 'Connected successfully to server'
  })

  const db = client.db(dbName)

  // insertDocument
  createNewUser(db)

  client.close()
})
