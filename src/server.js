const express = require('express')
const bodyParser = require('body-parser')
const handlers = require('./backend/main')

const app = express()


app.get('/api/users', handlers.list)
app.get('/api/users/:userId', handlers.getOne)
app.use('/api/users', bodyParser.json())
app.post('/api/users', handlers.addOne)
app.use('/front', express.static(__dirname + '/front'))

module.exports = {
    start(){
        app.listen(1337)
    }
}
