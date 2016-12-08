import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import Store from '../store';

import UserContainer from '../containers/user-container';

export default class UserRoute extends Component {
  static propTypes: {
    params: PropTypes.object.isRequired,
  };

  render() {
    return (
      <UserContainer id={this.props.params.userId} />
    );
  };
};
