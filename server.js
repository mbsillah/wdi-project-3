require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')


mongoose.Promise = global.Promise
// Create a new app using express
const app = express()

mongoose.connect(process.env.MONGODB_URI, { useMongoClient: true })
const connection = mongoose.connection

connection.on('connected', () => {
    console.log('Successfully connected to MongoDB')
})

connection.on('error', (err) => {
    console.log('MongoDB Error: ', err)
})

//Middleware
app.use(bodyParser.json())


const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log('App listening on port: ', PORT)
})
