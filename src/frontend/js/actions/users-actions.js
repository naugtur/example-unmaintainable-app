import Immutable from 'immutable';
import {
  APIcall,
  USERS_ENDPOINT,
} from './api';

export const fetchUsers = () => {
  return APIcall({
    endpoint: USERS_ENDPOINT,
    type_prefix: 'FETCH_USERS',
  });
};

export const fetchUser = id => {
  return APIcall({
    endpoint: `${USERS_ENDPOINT}/${id}`,
    type_prefix: 'FETCH_USER',
  });
};
