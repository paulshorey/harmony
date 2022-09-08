import { ApolloError } from '@apollo/client';

// DOCUMENTATION

export type POSTCategoryType = {
  backgroundUrl: string;
  hidden: boolean;
  id: number;
  name: string;
  sort: number;
  typeId: number;
};

export type GETCategoryType = {
  background: string;
  hidden: boolean;
  id: number;
  name: string;
  sort: number;
  type: {
    id: number;
    name: string;
  };
} & { string?: any };

// APOLLO STUFF

export type useGetCategoriesResponseType = {
  data?: GETCategoryType[];
  error?: ApolloError;
  loading: boolean;
  refetch: any;
};

export type useGetCategoryResponseType = {
  data?: GETCategoryType;
  error?: ApolloError;
  loading: boolean;
  refetch: any;
};

export type useEditCategoryResponseType = {
  editCategory: any;
  error_editCategory?: ApolloError;
  loading_editCategory: boolean;
};

export type useDeleteCategoryResponseType = {
  deleteCategory: any;
  error_deleteCategory?: ApolloError;
  loading_deleteCategory: boolean;
};

export type useAddCategoryResponseType = {
  addCategory: any;
  error_addCategory?: ApolloError;
  loading_addCategory: boolean;
};
