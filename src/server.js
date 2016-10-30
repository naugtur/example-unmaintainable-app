const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const listingAction = require('./backend/listingAction');
const errorHandler = require('./backend/errorHandler');

app.set('UsersService', listingAction);
app.set('ErrorHandler', errorHandler);

app.use('/api/users', bodyParser.json());

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

