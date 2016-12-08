import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import Store from '../store';

import UsersContainer from '../containers/users-container';

export default class UsersRoute extends Component {
  render() {
    return (
      <UsersContainer />
    );
  };
};
