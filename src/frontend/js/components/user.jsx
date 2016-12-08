import React, { PropTypes, Component } from 'react';

export default class User extends Component {
  static propTypes: {
    id: PropTypes.string.isRequired,
    user: PropTypes.object.isRequired,
    fetchUser: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.fetchUser = this.fetchUser.bind(this);
    this.fetchUser();
  };

  fetchUser() { this.props.fetchUser(this.props.id); };

  render() {
    const { user } = this.props;
    return (
      <div className="app">
        <div className="user">
          <ul>
            <li className="name">{user.get('username')}</li>
            <li>name: {user.get('displayName')}</li>
            <li>twitter: {user.get('twitter')}</li>
            <li>memberFor: {user.get('memberFor')}</li>
          </ul>
        </div>
        <button onClick={this.fetchUser}>refresh</button>
      </div>
    );
  };
};
