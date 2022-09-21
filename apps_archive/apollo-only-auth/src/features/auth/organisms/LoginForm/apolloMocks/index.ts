import {
  MOCK_VALIDATE_EMAIL,
  MOCK_VALIDATE_EMAIL_FAIL,
} from 'src/mocks/auth/validateEmail';
import { VALIDATE_EMAIL } from 'src/queries/Auth';

export const APOLLO_EMAIL_SUCCESS = [
  {
    request: {
      query: VALIDATE_EMAIL,
      variables: { email: 'good@123.com' },
    },
    result: {
      data: MOCK_VALIDATE_EMAIL,
    },
  },
];

export const APOLLO_EMAIL_FAIL = [
  {
    request: {
      query: VALIDATE_EMAIL,
      variables: { email: 'bad@123.com' },
    },
    result: {
      data: MOCK_VALIDATE_EMAIL_FAIL,
    },
  },
];
