// import { useApolloClient } from '@apollo/client';
import DefaultError from '@spiral/ui/src/features/error/molecules/DefaultErrorFallback';
// import ApolloClientProvider from '../../../apollo-client/ApolloProvider';
import { parseError } from '@spiral/ui/src/helpers/parseError';
import { useRouter } from 'next/router';
import React, { createContext, FC, useContext, useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

type ErrorType = {
  actionLink?: string;
  buttonText?: string;
  code: string;
  description?: string;
  name: string;
};

const defaultError = {
  code: '',
  description:
    'Get in touch with us at nonprofits@spiral.us and we’ll make sure it gets sorted out.',
  name: 'Something went wrong',
};

type ErrorContext = {
  error: typeof defaultError;
  setError: (error: string, redirect?: string) => void;
};

const Context = createContext<ErrorContext>({
  error: defaultError,
  setError: () => null,
});

/**
 * Error provider contains helpers to assist with global error management.
 * For example, when Apollo client detects a 200 server error, we set the error here and
 * display a modal containing the error.
 */
const ErrorProvider: FC = ({ children }) => {
  const [errorState, setErrorState] =
    useState<ErrorContext['error']>(defaultError);

  const router = useRouter();

  // const client = useApolloClient();

  const setError = async (error: string, redirect?: string) => {
    const parsed: ErrorType | string = parseError(error);
    if (typeof parsed !== 'string') {
      parsed.description = parsed?.description
        ? parsed.description
        : errorState.description;
    }
    const errorText =
      typeof parsed !== 'string' && parsed?.name && parsed?.description
        ? parsed
        : defaultError;

    if (redirect && typeof parsed !== 'string') {
      setErrorState({
        code: parsed.code,
        description: parsed.description || errorState.description,
        name: parsed.name,
      });
      router.push(redirect);
    } else {
      // eslint-disable-next-line no-console
      console.warn('context.error:', errorText);
    }
    // await client.clearStore();
  };

  return (
    <Context.Provider value={{ error: errorState, setError }}>
      {children}
    </Context.Provider>
  );
};

/**
 * Apollo Client will call useError to handle general global errors.
 * We support deep links inside our error handling, so another ApolloClientProvider
 * is necessary to complete any Apollo API calls that may occur inside a deep link.
 */
const ErrorProviderWrapper: FC = ({ children }) => {
  return (
    <ErrorBoundary FallbackComponent={DefaultError}>
      {/* <ApolloClientProvider> */}
      <ErrorProvider>{children}</ErrorProvider>
      {/* </ApolloClientProvider> */}
    </ErrorBoundary>
  );
};

/**
 * useError contains helpers to assist with global error management.
 * - For example, when Apollo client detects a 200 server error, we set the error here and
 * display a modal containing the error.
 */
const useError = () => {
  const context = useContext(Context);

  if (context === undefined) {
    throw new Error('useError must be used within a ErrorProvider');
  }

  return context;
};

export { ErrorProviderWrapper as ErrorProvider, useError };
