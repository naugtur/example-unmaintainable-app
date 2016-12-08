import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const UserEntry = ({ user }) => (
  <div key={user.get('id')} className="user">
    <span className="main">
      { user.get('displayName') }
    </span>
    <Link to={`/user/${user.get('id')}`}>
      details
    </Link>
  </div>
);

UserEntry.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserEntry;
