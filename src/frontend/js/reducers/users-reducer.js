import Immutable from 'immutable';

export const CONSTRUCT = () => Immutable.fromJS({
  users: [],
  currentUser: {
    id: '',
    username: '',
    displayName: '',
    twitter: '',
    memberFor: '',
  }
});

export const FETCH_USERS_REQUEST = state => state;

export const FETCH_USERS_SUCCESS = (state, action) => (
  state.set('users', Immutable.fromJS(action.payload.users))
);

export const FETCH_USERS_FAILURE = state => state;

export const FETCH_USER_REQUEST = state => state;

export const FETCH_USER_SUCCESS = (state, action) => (
  state.set('currentUser', Immutable.fromJS(action.payload))
);

export const FETCH_USER_FAILURE = state => state;
