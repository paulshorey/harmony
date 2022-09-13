import { RoutesSessionHistory } from '@ps/ui/src/components/molecules/RoutesSessionHistory';
import ThemeProvider from '@ps/ui/src/providers/theme';
import ApolloClientProvider from 'apollo-client/ApolloProvider';
import React, { FC } from 'react';
import { AuthProvider } from 'src/context/auth';
import { ErrorProvider } from 'src/context/error';
import theme from 'src/styles/theme';

type AppProviderProps = {
  children: React.ReactNode;
};

const AppProvider: FC<AppProviderProps> = ({ children }) => (
  <>
    <RoutesSessionHistory />
    <ApolloClientProvider>
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <ErrorProvider>{children}</ErrorProvider>
        </ThemeProvider>
      </AuthProvider>
    </ApolloClientProvider>
  </>
);
export default AppProvider;
