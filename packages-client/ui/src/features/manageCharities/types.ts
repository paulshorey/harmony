import { ApolloError } from '@apollo/client';

// DOCUMENTATION

export type POSTCharityType = {
  ach: boolean;
  categoryId: number;
  description: string;
  ein: string;
  iconUrl: string;
  id: number;
  name: string;
  partnered: boolean;
  recommended: boolean;
};

export type GETCharityType = {
  ach: boolean;
  category: { id: number; name: string };
  description: string;
  ein: string;
  icon: string;
  id: number;
  name: string;
  partnered: boolean;
  recommended: boolean;
} & { string?: any };

// APOLLO STUFF

export type useGetCharitiesResponseType = {
  error_getCharities?: ApolloError;
  getCharities: any;
  loading_getCharities: boolean;
};

export type useGetCharityResponseType = {
  data?: GETCharityType;
  error?: ApolloError;
  loading: boolean;
  refetch: any;
};

export type useEditCharityResponseType = {
  editCharity: any;
  error_editCharity?: ApolloError;
  loading_editCharity: boolean;
};

export type useDeleteCharityResponseType = {
  deleteCharity: any;
  error_deleteCharity?: ApolloError;
  loading_deleteCharity: boolean;
};

export type useAddCharityResponseType = {
  addCharity: any;
  error_addCharity?: ApolloError;
  loading_addCharity: boolean;
};

export type useConvertCharityToPartnerResponseType = {
  convertCharityToPartner: any;
  error_convertCharityToPartner?: ApolloError;
  loading_convertCharityToPartner: boolean;
};
