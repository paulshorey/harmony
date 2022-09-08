/* eslint-disable no-console */
import { useMutation, useQuery } from '@apollo/client';

import formatAfterGET from '../../../manage/formatAfterGET';
import formatBeforePOST from '../../../manage/formatBeforePOST';
import { GET_ROW_DATA } from '../../../manageCharities/mocks';
import {
  QUERY_ADD_CHARITY,
  QUERY_CONVERT_CHARITY_TO_PARTNER,
  QUERY_DELETE_CHARITY,
  QUERY_EDIT_CHARITY,
  QUERY_GET_CHARITIES,
  QUERY_GET_CHARITYBYID,
} from '../../../manageCharities/queries';
import fields from './fields';
import {
  useAddCharityResponseType,
  useConvertCharityToPartnerResponseType,
  useDeleteCharityResponseType,
  useEditCharityResponseType,
  useGetCharitiesResponseType,
  useGetCharityResponseType,
} from './types';

export const useGetCharities = (): useGetCharitiesResponseType => {
  const [mutate, { error, loading }] = useMutation(QUERY_GET_CHARITIES);

  const mutation = async ({ data }: { data: any }) => {
    console.log('mutate', data);
    const response = await mutate({
      variables: {
        data,
      },
    });
    return response?.data?.getCharities?.payload?.content?.map((data: any) =>
      formatAfterGET({ data, fields })
    );
  };

  return {
    error_getCharities: error,
    getCharities: mutation,
    loading_getCharities: loading,
  };
};

export const useGetCharity = (id: number): useGetCharityResponseType => {
  const { data, error, loading, refetch } = useQuery(QUERY_GET_CHARITYBYID, {
    fetchPolicy: 'network-only',
    variables: { id },
  });
  return {
    data:
      data &&
      formatAfterGET({
        data: data?.getCharity?.payload,
        fields,
      }),
    error,
    loading,
    refetch,
  };
};

export const useEditCharity = (): useEditCharityResponseType => {
  const [mutate, { error, loading }] = useMutation(QUERY_EDIT_CHARITY, {
    refetchQueries: [
      // {
      //   query: QUERY_GET_CHARITIES, // THIS DOES NOT WORK - BECAUSE IT IS ACTUALLY A MUTATION!
      // },
    ],
  });

  const editCharity = async ({
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
    editCharity,
    error_editCharity: error,
    loading_editCharity: loading,
  };
};

export const useAddCharity = (): useAddCharityResponseType => {
  const [mutate, { error, loading }] = useMutation(QUERY_ADD_CHARITY, {
    refetchQueries: [
      {
        query: QUERY_GET_CHARITIES,
      },
    ],
  });

  const addCharity = async ({ data }: { data: typeof GET_ROW_DATA }) => {
    const response = await mutate({
      variables: {
        data: formatBeforePOST({ crudAction: 'create', data, fields }),
      },
    });
    return response;
  };

  return {
    addCharity,
    error_addCharity: error,
    loading_addCharity: loading,
  };
};

export const useDeleteCharity = (): useDeleteCharityResponseType => {
  const [mutate, { error, loading }] = useMutation(QUERY_DELETE_CHARITY, {
    refetchQueries: [
      {
        query: QUERY_GET_CHARITIES,
      },
    ],
  });

  const deleteCharity = async ({ id }: { id: number }) => {
    const response = await mutate({
      variables: {
        id,
      },
    });
    return response;
  };

  return {
    deleteCharity,
    error_deleteCharity: error,
    loading_deleteCharity: loading,
  };
};

export const useConvertCharityToPartner =
  (): useConvertCharityToPartnerResponseType => {
    const [mutate, { error, loading }] = useMutation(
      QUERY_CONVERT_CHARITY_TO_PARTNER,
      {
        refetchQueries: [
          // {
          //   query: QUERY_GET_CHARITIES, // THIS DOES NOT WORK - BECAUSE IT IS ACTUALLY A MUTATION!
          // },
        ],
      }
    );

    const convertCharityToPartner = async ({ ein }: { ein: string }) => {
      const response = await mutate({
        variables: {
          data: { ein },
          ein,
        },
      });
      return response;
    };

    return {
      convertCharityToPartner,
      error_convertCharityToPartner: error,
      loading_convertCharityToPartner: loading,
    };
  };
