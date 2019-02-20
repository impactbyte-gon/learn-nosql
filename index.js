require('dotenv').config()
const MongoClient = require('mongodb').MongoClient

const url = process.env.URL // Connection URL
const dbName = process.env.DB_NAME // Database Name

// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  console.log({
    message: 'Connected successfully to server'
  })

  const db = client.db(dbName)
  client.close()
})
