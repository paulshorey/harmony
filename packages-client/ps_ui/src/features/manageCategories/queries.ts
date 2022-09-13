import gql from 'graphql-tag';

export const QUERY_GET_CATEGORIES = gql`
  query getCategories {
    getCategories
      @rest(
        type: "contentCharitiesCategories"
        path: "/content/charities/categories"
        method: "GET"
      ) {
      payload
      result
    }
  }
`;

export const QUERY_GET_CATEGORYBYID = gql`
  query getCategory($id: any) {
    getCategory(id: $id)
      @rest(
        type: "Category"
        path: "/content/charities/categories/{args.id}"
        method: "GET"
      ) {
      payload
      result
    }
  }
`;

export const QUERY_ADD_CATEGORY = gql`
  mutation addCategory($data: any) {
    addCategory(input: $data)
      @rest(
        path: "/content/charities/categories"
        method: "POST"
        body: $data
      ) {
      result
    }
  }
`;

export const QUERY_EDIT_CATEGORY = gql`
  mutation editCategory($id: any, $data: any) {
    editCategory(input: $data)
      @rest(
        path: "/content/charities/categories/{args.input.id}"
        method: "PUT"
        body: $data
      ) {
      result
    }
  }
`;

export const QUERY_DELETE_CATEGORY = gql`
  mutation deleteCategory($id: any) {
    deleteCategory(id: $id)
      @rest(path: "/content/charities/categories/{args.id}", method: "DELETE") {
      result
    }
  }
`;
