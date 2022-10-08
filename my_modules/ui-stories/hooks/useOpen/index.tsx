import { useCallback, useState } from "react";

export type useOpenReturnType = {
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
  Boxed?: boolean;
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
 * useOpen hook manages the open and closed states of various organisms
 * like modals, slide-ins, and menus.
 */
const useOpen = (props?: Props): useOpenReturnType => {
  const [isOpen, setIsOpen] = useState<boolean>(Boolean(props?.isOpen));

  const onOpen = useCallback(() => setIsOpen(true), []);

  const onClose = useCallback(() => {
    setIsOpen(false);

    if (props?.onClose && typeof props?.onClose === "function") {
      props.onClose();
    }
  }, []);

  const onToggle = useCallback(() => {
    if (props?.Boxed) {
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

export default useOpen;
