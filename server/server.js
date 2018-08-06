require('./config/config')

const express = require('express')
const app = express()

const bodyParser = require('body-parser')


// Json Middleware
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// Routes
app.use(require('./routes/heroes.router'))

// Server Connection
require('./db/connection')


app.listen(process.env.PORT, () => {
    console.log(`Server ready on port ${process.env.PORT}`)
})