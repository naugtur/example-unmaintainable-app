import React, { PropTypes, Component } from 'react';

import UserEntry from './user-entry';

export default class Users extends Component {
  static propTypes: {
    users: PropTypes.object.isRequired,
    fetchUsers: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.fetchUsers = this.fetchUsers.bind(this);
    this.fetchUsers();
  };

  fetchUsers() { this.props.fetchUsers() };

  render() {
    return (
      <div className="app">
        <div className="list x">
          {this.props.users.map(user => (
            <UserEntry key={user.get('id')} user={user} />
          ))}
        </div>
        <button onClick={this.fetchUsers}>refresh</button>
      </div>
    );
  };
};
