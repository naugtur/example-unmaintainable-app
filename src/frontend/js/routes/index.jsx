import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './app';
import UsersRoute from './users-route';
import UserRoute from './user-route';

export default () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={UsersRoute} />
      <Route path="/user/:userId" component={UserRoute} />
    </Route>
  </Router>
);
