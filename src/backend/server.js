const express = require('express');
const routes = require('./routes');

let app = express();
app = routes(app);

app.use('/', express.static(__dirname + '/../../dist'));

module.exports = {
  start() {
    app.listen(1337);
  }
};
