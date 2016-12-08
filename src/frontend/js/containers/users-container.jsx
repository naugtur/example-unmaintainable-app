import { connect } from 'react-redux';
import Users from '../components/users';
import { fetchUsers } from '../actions/users-actions';

const mapStateToProps = (state) => ({
  users: state.get('usersReducer').get('users'),
});

export default connect(mapStateToProps, { fetchUsers })(Users);
