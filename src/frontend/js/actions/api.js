import { CALL_API } from 'redux-api-middleware';

const API_URL = 'http://localhost:1337/api/';

export const USERS_ENDPOINT = 'users';

export const APIcall = (options) => {
  const request = {
    endpoint: `${API_URL}${options.endpoint}`,
    method: options.method || 'GET',
    types: [
      `${options.type_prefix}_REQUEST`,
      `${options.type_prefix}_SUCCESS`,
      `${options.type_prefix}_FAILURE`,
    ],
    headers: options.headers || { 'Content-Type': 'application/json' },
  };
  if (options.query) request.endpoint += `?${options.query}`;
  if (options.body) request.body = options.body;
  return { [CALL_API]: request };
};
