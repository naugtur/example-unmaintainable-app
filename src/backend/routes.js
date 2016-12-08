const usersRoutes = require('./users/routes');

const routes = app => {
  app = usersRoutes(app);
  return app;
};

module.exports = routes;
