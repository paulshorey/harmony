import gql from 'graphql-tag';

export const QUERY_GET_CHARITIES = gql`
  mutation getCharities($data: any) {
    getCharities(input: $data)
      @rest(
        type: "contentCharities"
        path: "/content/_search/charities"
        method: "POST"
        body: $data
      ) {
      payload
      result
    }
  }
`;

export const QUERY_GET_CHARITYBYID = gql`
  query getCharity($id: any) {
    getCharity(id: $id)
      @rest(
        type: "Charity"
        path: "/content/charities/{args.id}"
        method: "GET"
      ) {
      payload
      result
    }
  }
`;

export const QUERY_ADD_CHARITY = gql`
  mutation addCharity($data: any) {
    addCharity(input: $data)
      @rest(path: "/content/charities", method: "POST", body: $data) {
      result
    }
  }
`;

export const QUERY_CONVERT_CHARITY_TO_PARTNER = gql`
  mutation getCharity($ein: string, $data: any) {
    getCharity(input: $data)
      @rest(
        path: "/content/charities/convert/{args.input.ein}"
        method: "POST"
        body: $data
      ) {
      payload
      result
    }
  }
`;

export const QUERY_EDIT_CHARITY = gql`
  mutation editCharity($id: any, $data: any) {
    editCharity(input: $data)
      @rest(
        path: "/content/charities/{args.input.id}"
        method: "PUT"
        body: $data
      ) {
      result
    }
  }
`;

export const QUERY_DELETE_CHARITY = gql`
  mutation deleteCharity($id: any) {
    deleteCharity(id: $id)
      @rest(path: "/content/charities/{args.id}", method: "DELETE") {
      result
    }
  }
`;
