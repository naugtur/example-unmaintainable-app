const express = require('express');
const bodyParser = require('body-parser');
const handlers = require('./backend/main');
const app = express();
const listingAction = require('./backend/listingAction');

app.set('DatabaseConnector', listingAction);

app.get('/api/users/:userId', handlers.getOne);
app.use('/api/users', bodyParser.json());

app.post('/api/users', handlers.addOne);
app.use('/api', require('./backend/users'));

/*eslint-disable */
app.use('/front', express.static(__dirname + '/front'));

module.exports = {
    start(){
        const server = app.listen(1337, function () {
            const port = server.address().port;

            console.log('Example app listening at http://127.0.0.1:%s', port);
            /*eslint-enable */
        });
    }
};

