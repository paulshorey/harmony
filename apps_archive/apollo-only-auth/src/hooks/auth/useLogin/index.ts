import { useMutation } from '@apollo/client';
import { useToken } from 'src/hooks/auth/useToken';

import { MOCK_LOGIN } from './mocks';
import { GET_AUTHENTICATION } from './query';

type loginResponse = Promise<{
  admin: boolean | undefined;
  manager: boolean | undefined;
  roles: string[] | undefined;
  success: boolean;
  token: string | undefined;
}>;

type login = (args: {
  deviceId: string;
  password: string;
  username: string;
}) => loginResponse;

type useLoginResponse = {
  loading: boolean;
  login: login;
};

type MutationGetAuthentication = typeof MOCK_LOGIN;

type MutationGetAuthenticationVariables = {
  deviceId: string;
  email: string;
  password: string;
};

/**
 * @returns Helper function to login to the app and apply needed cookies/token
 */
const useLogin = (): useLoginResponse => {
  const { setToken } = useToken();

  const [mutate, { loading }] = useMutation<
    MutationGetAuthentication,
    MutationGetAuthenticationVariables
  >(GET_AUTHENTICATION, {
    onCompleted: (r) => {
      const token = r?.getAuthentication?.payload?.security;
      const timeout = r?.getAuthentication?.payload?.sessionTimeout;

      setToken({ timeout, token });
    },
    context: { handleError: false },
  });

  const login: login = async ({ deviceId, password, username }) => {
    try {
      const result = await mutate({
        variables: { deviceId, password, email: username },
      });
      const token = result.data?.getAuthentication?.payload?.security;

      const success = result.data?.getAuthentication.result === 'success';

      const admin = result.data?.getAuthentication?.payload.admin;

      const manager = result.data?.getAuthentication?.payload.manager;

      const roles = result.data?.getAuthentication?.payload.roles;

      return { success, token, admin, manager, roles };
    } catch (error) {
      return {
        success: false,
        token: undefined,
        admin: undefined,
        manager: undefined,
        roles: undefined,
      };
    }
  };

  return { loading, login };
};

export default useLogin;
