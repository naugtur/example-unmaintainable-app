import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import Store from '../store';

export default class App extends Component {
  static propTypes: {
    children: PropTypes.object.isRequired,
  };

  render() {
    return (
      <Provider store={Store}>
        { this.props.children }
      </Provider>
    );
  };
};
