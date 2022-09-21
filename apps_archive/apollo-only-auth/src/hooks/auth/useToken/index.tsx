import { atom, useAtom } from 'jotai';
import { destroyCookie, parseCookies, setCookie } from 'nookies';

type TokenContext = {
  /**
   * Reason for logging a user out
   */
  reason: RemoveTokenReason | undefined;
  /**
   * Remove the current session token
   */
  removeToken: (args?: { reason?: RemoveTokenReason }) => void;
  /**
   * Set the current session token
   */
  setToken: (args: { timeout: number; token: string }) => void;
  /**
   * The current session token
   */
  token: string | undefined;
};

export type RemoveTokenReason = 'TIMEOUT' | undefined;

/**
 * Token provider contains the current value, and utils to manage
 * the Cookies/Token used for global authentication in the app.
 *
 * This layer is separate from Auth to allow Apollo Client to
 * read and mutate the shared value for token.
 */

const removeTokenReasonAtom = atom<RemoveTokenReason>(undefined);

const tokenAtom = atom<string | undefined>(parseCookies()?.auth_token);

const useToken = (): TokenContext => {
  const [authToken, setAuthToken] = useAtom(tokenAtom);

  const [reason, setReason] = useAtom(removeTokenReasonAtom);

  const removeToken = (args?: { reason?: RemoveTokenReason }) => {
    if (args?.reason) {
      /* @ts-ignore */
      setReason(args?.reason);
    }

    setAuthToken(undefined);

    destroyCookie({}, 'auth_token', { path: '/' });
    destroyCookie({}, 'auth_expires', { path: '/' });
  };

  const setToken = ({ timeout, token }: { timeout: number; token: string }) => {
    setAuthToken(token);

    setCookie(null, 'auth_token', token, {
      maxAge: timeout || 300,
      path: '/',
      sameSite: 'strict',
      secure: true,
    });

    const now = new Date();
    const auth_expires_at = now.setSeconds(now.getSeconds() + 300);
    /* @ts-ignore */
    setReason(undefined);

    setCookie(null, 'auth_expires', auth_expires_at.toString(), {
      maxAge: timeout || 300,
      path: '/',
      sameSite: 'strict',
      secure: true,
    });
  };

  return { reason, removeToken, setToken, token: authToken };
};

export { useToken };
