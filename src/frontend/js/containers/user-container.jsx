import { connect } from 'react-redux';
import User from '../components/user';
import { fetchUser } from '../actions/users-actions';

const mapStateToProps = (state) => ({
  user: state.get('usersReducer').get('currentUser'),
});

export default connect(mapStateToProps, { fetchUser })(User);
