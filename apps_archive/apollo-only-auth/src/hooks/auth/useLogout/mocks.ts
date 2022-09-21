import { LOGOUT } from './query';

export const MOCK_LOGOUT_SUCCESS = {
  logout: {
    __typename: 'logout',
    result: 'success',
  },
};

export const APOLLO_LOGOUT_USER = [
  {
    request: {
      query: LOGOUT,
      variables: {},
    },
    result: {
      data: MOCK_LOGOUT_SUCCESS,
      error: undefined,
    },
  },
];

export const APOLLO_LOGOUT_USER_FAIL = [
  {
    error: new Error(),
    request: {
      query: LOGOUT,
      variables: {},
    },
  },
];
