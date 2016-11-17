const express = require('express');
const routes = require('./backend/routes');

let app = express();
app = routes(app);

app.use('/front', express.static(__dirname + '/front'));

module.exports = {
  start() {
    app.listen(1337);
  }
}
