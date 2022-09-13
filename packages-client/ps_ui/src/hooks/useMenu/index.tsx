import { useRouter } from 'next/router';
import {
  createContext,
  FC,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
} from 'react';

import useDisclosure, { useDisclosureReturnType } from '../useDisclosure';
import { useMounted } from '../useMounted';

const MenuContext = createContext<useDisclosureReturnType | undefined>(
  undefined
);

export type ProviderProps = {
  /** to block initial state */
  blocked?: boolean;
  children: ReactNode;
  /** Default initial state */
  isOpen?: boolean;
  /**
   * Function to be called on close
   */
  onClose?: () => void;
};

/** Menu Provider manages the state of any single menu.
 * It may be provided with an initial value (open or closed) but will default to closed.
 * This component is only used in the top-level Menu molecule (or variants)
 */
export const MenuProvider: FC<ProviderProps> = ({
  blocked,
  children,
  isOpen: initialOpen = false,
  onClose: externalOnClose,
}) => {
  const { isOpen, onClose, onOpen, onToggle } = useDisclosure({
    blocked,
    isOpen: initialOpen,
    onClose: externalOnClose,
  });

  const { hasMounted } = useMounted();

  const router = useRouter();

  useEffect(() => {
    if (hasMounted) {
      router.events.on('routeChangeComplete', onClose);
    }

    return () => router.events.off('routeChangeComplete', onClose);
  }, []);

  const listenForEscapeKey = useCallback((event) => {
    if (event.keyCode === 27) {
      onClose();
    }

    return () => router.events.off('routeChangeComplete', onClose);
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', listenForEscapeKey, false);

    return () => {
      document.removeEventListener('keydown', listenForEscapeKey, false);
    };
  }, []);

  return (
    <MenuContext.Provider value={{ isOpen, onClose, onOpen, onToggle }}>
      {children}
    </MenuContext.Provider>
  );
};

/** useMenu is a shareable hook that will allow any component nested
 * inside a MenuProvider access to open/closed values as well as setIsOpen.
 */
export const useMenu = () => {
  const context = useContext(MenuContext);
  if (context === undefined) {
    throw new Error('useMenu must be used within a MenuProvider');
  }
  return context;
};
