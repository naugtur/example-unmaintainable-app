const bodyParser = require('body-parser');
const usersActions = require('./actions');

const routes = app => {
  app.use('/api/users', bodyParser.json());
  app.get('/api/users', usersActions.index);
  app.get('/api/users/:userId', usersActions.show);
  app.post('/api/users', usersActions.create);
  return app;
};

module.exports = routes;
