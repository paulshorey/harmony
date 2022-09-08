import { GET_AUTHENTICATION } from './query';

export const MOCK_LOGIN = {
  getAuthentication: {
    payload: {
      security: '79348647-1908-4a6e-bb8b-b4c337cbc7d1',
      sessionTimeout: 300,
      admin: true,
      manager: true,
      roles: [''],
    },
    result: 'success',
  },
};

export const MOCK_SIGN_IN_SUCCESS = {
  getAuthentication: {
    errors: [],
    payload: {
      security: '79348647-1908-4a6e-bb8b-b4c337cbc7d1',
      sessionTimeout: 300,
      admin: true,
      manager: true,
      roles: [''],
    },
    result: 'success',
  },
};

export const APOLLO_SIGN_IN_USER = (deviceId: string) => {
  return [
    {
      request: {
        query: GET_AUTHENTICATION,
        variables: {
          deviceId,
          password: 'Pa$$w0rd',
          email: 'user@user.eu',
        },
      },
      result: {
        data: MOCK_SIGN_IN_SUCCESS,
      },
    },
  ];
};

export const APOLLO_SIGN_IN_USER_ERROR = (deviceId: string) => {
  return [
    {
      error: new Error('An error occurred'),
      request: {
        query: GET_AUTHENTICATION,
        variables: {
          deviceId,
          password: 'Pa$$w0rd',
          email: 'user@user.eu',
        },
      },
    },
  ];
};
