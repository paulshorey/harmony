import { ApolloProvider } from '@apollo/client';
import { tsFixMe } from 'src/types';

import { useApolloClient } from '.';

const ApolloClientProvider = ({ children }: tsFixMe) => {
  const client = useApolloClient();

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloClientProvider;
