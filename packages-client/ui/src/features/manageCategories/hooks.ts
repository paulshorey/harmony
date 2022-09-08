/* eslint-disable no-console */
import { useMutation, useQuery } from '@apollo/client';

import formatAfterGET from '../../../manage/formatAfterGET';
import formatBeforePOST from '../../../manage/formatBeforePOST';
import { GET_ROW_DATA } from '../../../manageCategories/mocks';
import {
  QUERY_ADD_CATEGORY,
  QUERY_DELETE_CATEGORY,
  QUERY_EDIT_CATEGORY,
  QUERY_GET_CATEGORIES,
  QUERY_GET_CATEGORYBYID,
} from '../../../manageCategories/queries';
import fields from './fields';
import {
  useAddCategoryResponseType,
  useDeleteCategoryResponseType,
  useEditCategoryResponseType,
  useGetCategoriesResponseType,
  useGetCategoryResponseType,
} from './types';

export const useGetCategories = (): useGetCategoriesResponseType => {
  const { data, error, loading, refetch } = useQuery(QUERY_GET_CATEGORIES);
  return {
    data: data?.getCategories?.payload?.content?.map((data: any) =>
      formatAfterGET({ data, fields })
    ),
    error,
    loading,
    refetch,
  };
};

export const useGetCategory = (id: number): useGetCategoryResponseType => {
  const { data, error, loading, refetch } = useQuery(QUERY_GET_CATEGORYBYID, {
    fetchPolicy: 'network-only',
    variables: { id },
  });
  return {
    data:
      data &&
      formatAfterGET({
        data: data?.getCategory?.payload,
        fields,
      }),
    error,
    loading,
    refetch,
  };
};

export const useEditCategory = (): useEditCategoryResponseType => {
  const [mutate, { error, loading }] = useMutation(QUERY_EDIT_CATEGORY, {
    refetchQueries: [
      {
        query: QUERY_GET_CATEGORIES,
      },
    ],
  });

  const editCategory = async ({
    data,
    id,
  }: {
    data: typeof GET_ROW_DATA;
    id: number;
  }) => {
    const response = await mutate({
      variables: {
        data: formatBeforePOST({ data, fields }),
        id,
      },
    });
    return response;
  };

  return {
    editCategory,
    error_editCategory: error,
    loading_editCategory: loading,
  };
};

export const useAddCategory = (): useAddCategoryResponseType => {
  const [mutate, { error, loading }] = useMutation(QUERY_ADD_CATEGORY, {
    refetchQueries: [
      {
        query: QUERY_GET_CATEGORIES,
      },
    ],
  });

  const addCategory = async ({ data }: { data: typeof GET_ROW_DATA }) => {
    const response = await mutate({
      variables: {
        data: formatBeforePOST({ crudAction: 'create', data, fields }),
      },
    });
    return response;
  };

  return {
    addCategory,
    error_addCategory: error,
    loading_addCategory: loading,
  };
};

export const useDeleteCategory = (): useDeleteCategoryResponseType => {
  const [mutate, { error, loading }] = useMutation(QUERY_DELETE_CATEGORY, {
    refetchQueries: [
      {
        query: QUERY_GET_CATEGORIES,
      },
    ],
  });

  const deleteCategory = async ({ id }: { id: number }) => {
    const response = await mutate({
      variables: {
        id,
      },
    });
    return response;
  };

  return {
    deleteCategory,
    error_deleteCategory: error,
    loading_deleteCategory: loading,
  };
};
