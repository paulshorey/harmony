import buildDeviceId from '@ps/ui/src/helpers/buildDeviceId';
import { useToken } from 'src/hooks/auth/useToken';
import { useRouter } from 'next/router';
import React, {
  createContext,
  Dispatch,
  FC,
  SetStateAction,
  useContext,
  useState,
} from 'react';
import useLogin from 'src/hooks/auth/useLogin';
import useLogout from 'src/hooks/auth/useLogout';

type AuthContext =
  | {
      isAdmin: boolean;
      isLoggedIn: boolean;
      isManager: boolean;

      loginLoading: boolean;
      registrationSignIn: (token: string) => void;

      setIsAdmin: Dispatch<SetStateAction<boolean>>;
      setIsManager: Dispatch<SetStateAction<boolean>>;

      signIn: (username: string, password: string) => Promise<void | false>;

      signOut: () => Promise<void>;
      storeTemporaryToken: (token: string) => void;
      user: string;
    }
  | undefined;

const Context = createContext<AuthContext>(undefined);

/**
 * The Auth context layer provides helpers to assist with determining a user's auth status,
 * as well as the utils needed to modify the status ie. login/logout.
 *
 * When possible, we should use the helpers below vs directly interacting with the various
 * parts of authentication. ie. Token / useLogin / useLogout
 */

const AuthProvider: FC = ({ children }) => {
  const router = useRouter();

  const { setToken, token } = useToken();

  const { loading, login } = useLogin();

  const { logout } = useLogout();

  const isLoggedIn = !!token;

  const initManager = () => {
    const item =
      typeof window !== 'undefined' && window?.localStorage?.getItem('manager');

    if (item) {
      return JSON.parse(item);
    }

    return false;
  };

  const [isManager, setIsManager] = useState<boolean>(initManager());

  const handleSetManager = (manager: boolean) => {
    setIsManager(manager);
    localStorage.setItem('manager', JSON.stringify(manager));
  };

  const initAdmin = () => {
    const item =
      typeof window !== 'undefined' && window?.localStorage?.getItem('admin');

    if (item) {
      return JSON.parse(item);
    }

    return false;
  };

  const initUser = () => {
    const item =
      typeof window !== 'undefined' && window?.localStorage?.getItem('user');

    if (item) {
      return JSON.parse(item);
    }

    return false;
  };

  const [isAdmin, setIsAdmin] = useState<boolean>(initAdmin());

  const handleSetAdmin = (admin: boolean) => {
    setIsAdmin(admin);
    localStorage.setItem('admin', JSON.stringify(admin));
  };

  const [user, setUser] = useState<string>(initUser());

  const handleSetUser = (user: string) => {
    setUser(user);
    localStorage.setItem('user', JSON.stringify(user));
  };

  const authContextVal: AuthContext = {
    isAdmin,
    isLoggedIn,
    isManager,
    loginLoading: loading,
    registrationSignIn: async (t) => {
      setToken({ timeout: 300, token: t });
    },
    setIsAdmin,
    setIsManager,
    signIn: async (username, password) => {
      const deviceId = buildDeviceId();
      const { admin, manager, success } = await login({
        deviceId,
        password,
        username,
      });

      if (!success) {
        return false;
      }

      handleSetUser(username);
      handleSetAdmin(admin || false);
      handleSetManager(manager || false);

      const redirectUrl = router.query.redirect || '/home';
      router.push(redirectUrl.toString());

      return;
    },
    signOut: async () => {
      await logout();
      router.push('/');
    },
    storeTemporaryToken: async (t) => {
      setToken({ timeout: 300, token: t });
    },
    user,
  };

  return (
    <Context.Provider value={{ ...authContextVal }}>
      <>{children}</>
    </Context.Provider>
  );
};

const useAuth = () => {
  const context = useContext(Context);

  if (context === undefined) {
    throw new Error('useAuth must be used within a AuthProvider');
  }

  return context;
};

export { AuthProvider, useAuth };
