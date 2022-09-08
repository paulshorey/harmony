import gql from 'graphql-tag';

export const LOGOUT = gql`
  mutation logout {
    logout @rest(type: "logout", path: "/user/logout", method: "GET")
  }
`;
