/* eslint-disable no-console */
import { ApolloClient, ApolloLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import { sanitize } from '@ps/ui/src/helpers/sanitize';
// import { toCamelCase } from 'src/helpers/toCamelCase';
import { tsFixMe } from '@ps/ui/src/types';
import DebounceLink from 'apollo-link-debounce';
import { RestLink } from 'apollo-link-rest';
import nookies, { parseCookies, setCookie } from 'nookies';
import { useMemo } from 'react';
import { useError } from 'src/context/error';
import { useToken } from 'src/hooks/auth/useToken';

// @ts-ignore
import packageJSON from '../package.json';
import cache from './cache';

const getEnv = () => 'stage';

const APP_VERSION = packageJSON.version;

const DEFAULT_DEBOUNCE_TIMEOUT = 300;

const restLink = new RestLink({
  headers: {
    Accept: 'application/json, application/pdf',
  },
  responseTransformer: async (response: Response) => {
    if (response?.headers?.get('Content-Type') === 'application/pdf') {
      const blob = await response
        .blob()
        .then((blob) => new Blob([blob], { type: 'application/pdf' }));
      const fileURL = URL.createObjectURL(blob);
      return { payload: fileURL };
    }

    /**
     * This allows us to catch SOMETHING for a 404. No other metadata is available.
     */
    if (response === null) {
      throw {
        result: {
          error: 'Not found',
          status: 404,
        },
      };
    }

    if (response.json) {
      return response?.json();
    }

    return null;
  },
  uri: process.env.API_BASE,
});

const authLink = (ctx: any, token: any) => {
  return setContext(() => {
    const cookies = ctx ? nookies.get(ctx) : parseCookies();
    let xAuthToken = cookies?.auth_token;

    if (token) {
      xAuthToken = token;
    }

    const extendCookieLife = () => {
      const now = new Date();

      const auth_expires_at = now.setSeconds(now.getSeconds() + 300);

      setCookie(null, 'auth_token', token, {
        maxAge: 300,
        path: '/',
        sameSite: 'strict',
        secure: true,
      });

      setCookie(null, 'auth_expires', auth_expires_at.toString(), {
        maxAge: 300,
        path: '/',
        sameSite: 'strict',
        secure: true,
      });
    };

    if (token) {
      extendCookieLife();
    }

    return {
      headers: {
        'X-Auth-Token': xAuthToken || null,
        'spiral-env': getEnv(),
        'spiral-version': `web-${APP_VERSION}`,
      },
    };
  });
};

const errorLink = ({
  handleError,
  removeToken,
}: {
  handleError?: (e: string[], redirect?: string, payload?: string) => void;
  removeToken?: () => void;
}) =>
  onError(({ graphQLErrors, networkError, operation }) => {
    if (graphQLErrors) {
      graphQLErrors.map(({ locations, message, path }) => {
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
        );
      });
    }
    if (networkError) {
      console.log(
        `[Network error]: ${networkError}`,
        JSON.stringify(networkError)
      );
      const parsed = JSON.parse(JSON.stringify(networkError));
      //  @ts-ignore
      const status: number = networkError?.statusCode;
      /**
       * If auth error, we remove token which triggers logout.
       */
      if (status === 403 && removeToken) {
        removeToken();
        return;
      }

      /**
       * If any other type of error, use default global error handling if
       * call does not explicitly block this with handleError = false;
       */
      const context = operation.getContext();
      if (status >= 400 && handleError && context.handleError !== false) {
        const errors = parsed?.result?.errors;
        const payload = parsed?.result?.payload;
        handleError(errors, context?.redirect, payload);
        /**
         * We wait for all in-flight queries to finish first to avoid errors.
         * See: https://github.com/vuejs/vue-apollo/issues/842
         */
        context?.app?.apolloProvider?.defaultClient?.queryManager?.fetchQueryRejectFns();
      }
    }
  });

const sanitizeVariablesMiddleware = new ApolloLink((operation, forward) => {
  const isVariablesEmpty = Object.keys(operation.variables).length === 0;

  if (!isVariablesEmpty) {
    /**
     * If variables exist, we want to sanitize them.
     * We ignore passwords.
     */
    operation.variables = sanitize(operation.variables, [
      'password',
      'newPassword',
    ]);
  }

  return forward(operation);
});

type InitClientVariables = {
  context?: tsFixMe;
  handleError?: (e: string[], redirect?: string, payload?: string) => void;
  removeToken?: () => void;
  token?: string;
};

/**
 * Initialize an instance of Apollo Client
 * We use this in the hook below, as well as on mobile-giving.
 * Ideal for custom uses like getInitialProps etc.
 */
const initClient = ({
  context,
  handleError,
  removeToken,
  token,
}: InitClientVariables) => {
  const client = new ApolloClient({
    cache,
    defaultOptions: {
      mutate: {
        /** Allow errors AND data to be returned - see serverLink */
        errorPolicy: 'all',
      },
      query: {
        /** Allow errors AND data to be returned - see serverLink */
        errorPolicy: 'all',
      },
    },
    link: ApolloLink.from([
      sanitizeVariablesMiddleware,
      new DebounceLink(DEFAULT_DEBOUNCE_TIMEOUT),
      authLink(context, token),
      errorLink({ handleError, removeToken }),
      restLink,
    ]),
  });

  return client;
};

/**
 * The Apollo instance we use client-side that includes token context and auto logout capabilities.
 */
const useApolloClient = () => {
  const { removeToken, token } = useToken();

  const { setError } = useError();

  const handleLogoutError = async () => {
    await client.clearStore();
    localStorage.clear();
    removeToken({ reason: 'TIMEOUT' });
  };
  /**
   * We memoize here to avoid re-rendering the client every time
   * any higher context changes. Re-render if token status changes.
   */
  const client = useMemo(
    function init() {
      return initClient({
        handleError: async (errors, redirect, payload) => {
          setError(errors, redirect, payload);
        },
        removeToken: handleLogoutError,
        token,
      });
    },
    [token]
  );

  return client;
};

export { initClient, useApolloClient };
