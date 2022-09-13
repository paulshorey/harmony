import { useRouter } from 'next/router';
import React from 'react';
import useSessionStorage from 'src/helpers/useSessionStorage';

/**
 * A Component to automatically add route change items to session storage history.
 */
const SessionHistory = () => {
  const router = useRouter();

  const sessionName = 'spiral_history';

  const { get, set } = useSessionStorage();

  const handleUpdateSessionHistory = (path: string) => {
    /**
     * Max items allowed to exist in history
     */
    const MAX_ITEMS = 10;

    const history = get('spiral_history');

    const queue = history ? history.slice(0, MAX_ITEMS) : [];

    /**
     * We don't support auth'd routes, and do not add duplicate history items
     */
    if (!path.includes('auth') && path !== history?.[0]) {
      set(sessionName, [path, ...queue]);
    }
  };

  React.useEffect(() => {
    router.events.on('routeChangeComplete', handleUpdateSessionHistory);
    return () => {
      router.events.off('routeChangeComplete', handleUpdateSessionHistory);
    };
  }, [router.events]);

  return null;
};

type goBack = ({
  fallback,
  includes,
}: {
  /**
   * Fallback url if no history is available or the includes rule is violated
   */
  fallback: string;
  /**
   * Only go back if the previous path includes this string
   */
  includes?: string;
}) => void;

/**
 * A helper to interact with Session History
 */
const useSessionHistory = (): {
  /**
   * Go back, similar to next/router goBack.
   */
  goBack: goBack;
} => {
  const { get, set } = useSessionStorage();

  const router = useRouter();

  const goBack: goBack = ({ fallback, includes }) => {
    const history = get('spiral_history');

    const [, last, ...rest] = history;

    /**
     * History must have at least 2 items (current and previous)
     */
    if (history.length >= 2) {
      /**
       * IF route does not include string match, we fallback
       * We do not go back to logged out states.
       */
      if (includes && !last.includes(includes)) {
        router.push(fallback);
      } else {
        /**
         * Remove the current item and last item from history
         */
        router.push(last);
        set('spiral_history', [...rest]);
      }

      return;
    }

    router.push(fallback);
  };

  return { goBack };
};

export { SessionHistory, useSessionHistory };
