import { useCallback, useState } from 'react';

export type useDisclosureReturnType = {
  isOpen: boolean;
  /**
   * Set isOpen false
   */
  onClose: () => void;
  /**
   * Set isOpen true
   */
  onOpen: () => void;
  /**
   * Toggle isOpen
   */
  onToggle: () => void;
};

type Props = {
  blocked?: boolean;
  /**
   * Initial isOpen state
   */
  isOpen?: boolean;
  /**
   * Additional onClose handler
   */
  onClose?: () => void;
};

/**
 * useDisclosure hook manages the open and closed states of various organisms
 * like modals, slide-ins, and menus.
 */
const useDisclosure = (props?: Props): useDisclosureReturnType => {
  const [isOpen, setIsOpen] = useState<boolean>(Boolean(props?.isOpen));

  const onOpen = useCallback(() => setIsOpen(true), []);

  const onClose = useCallback(() => {
    setIsOpen(false);

    if (props?.onClose && typeof props?.onClose === 'function') {
      props.onClose();
    }
  }, []);

  const onToggle = useCallback(() => {
    if (props?.blocked) {
      return;
    }
    setIsOpen((curr) => !curr);
  }, []);

  return {
    isOpen,
    onClose,
    onOpen,
    onToggle,
  };
};

export default useDisclosure;
