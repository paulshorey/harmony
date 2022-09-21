import gql from 'graphql-tag';

export const GET_AUTHENTICATION = gql`
  mutation getAuthentication(
    $email: String!
    $password: String!
    $deviceId: String!
  ) {
    getAuthentication(
      input: { username: $email, password: $password, deviceId: $deviceId }
    )
      @rest(
        type: "GetAuthentication"
        path: "/user/authenticate"
        method: "POST"
      ) {
      payload
      result
      errors
    }
  }
`;
