import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from '@apollo/client';
import { Observable } from 'apollo-link';
import React from 'react';

/** Mocked provider wrapper with permanent loading state to simulate/test loading for Apollo Queries*/
const LoadingMockedProvider: React.FunctionComponent = (props) => {
  // @ts-ignore
  const link = new ApolloLink(() => {
    return new Observable(() => {});
  });

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link,
  });

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
};

export default LoadingMockedProvider;
