const express = require('express')
const bodyParser = require('body-parser')
const handlers = require('./backend/controller/UserController')

const app = express()
const __dirname='.'
app.get('/api/users', handlers.findAll)
app.get('/api/users/:userId', handlers.findOne)

app.use('/api/users', bodyParser.json())
app.post('/api/users', handlers.saveOne)

app.use('/front', express.static(__dirname + '/front'))

module.exports = {
    start(){
        app.listen(1337)
    }
}
