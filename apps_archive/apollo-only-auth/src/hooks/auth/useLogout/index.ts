import { useApolloClient, useMutation } from '@apollo/client';
// import { reset } from 'src/context/analytics/analytics/reset';
import { RemoveTokenReason, useToken } from 'src/hooks/auth/useToken';

import { LOGOUT } from './query';

export type useLogoutResponse = {
  logout: (args?: { reason: RemoveTokenReason }) => Promise<void>;
};

/**
 * Logout from the app, clearing all cookies and cache.
 */
const useLogout = (): useLogoutResponse => {
  const { removeToken } = useToken();

  const client = useApolloClient();

  const [apiLogout] = useMutation(LOGOUT);

  const logout: useLogoutResponse['logout'] = async (args) => {
    if (args?.reason !== 'TIMEOUT') {
      try {
        await apiLogout();
      } catch (e) {
        // eslint-disable-next-line no-console
        console.log(e);
      }
    }

    // reset();
    removeToken({ reason: args?.reason });
    await client.clearStore();
    localStorage.clear();
  };

  return { logout };
};

export default useLogout;
