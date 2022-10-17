import { Props as BoxProps } from '@ps/ui/components/content/Box';
import { memo, useEffect, forwardRef, ReactElement } from 'react';
import ReactModal from 'react-modal';
import variants from './variants';
import useComponentWithProps12 from '@ps/ui/hooks/useComponentWithProps12';
import useStyleProps from '@ps/ui/styles/useStyleProps';

export type Props = BoxProps & {
  contentLabel?: string;
  isOpen: boolean;
  label?: string;
  onClose?: any;
  showClose?: boolean;
  type?: string;
};

export const Component: (
  props: Props,
  ref?: ReactForwardedRef
) => ReactElement = (
  {
    isOpen,
    onClose = () => {},
    contentLabel = '',
    children,
    showClose = true,
    type = '',
    ...props
  },
  ref
) => {
  const [Styled, otherProps] = useStyleProps(props, 'div', 'Modal', variants);

  // I forget what exactly this does and why it was necessary.
  useEffect(() => {
    if (typeof window === 'object') {
      if (isOpen) {
        setTimeout(function () {
          document.body.style.overflow = 'hidden';
        }, 100);
      } else {
        document.body.style.overflow = 'auto';
      }
    }
  }, [isOpen]);

  return (
    <ReactModal
      {...otherProps}
      contentLabel={contentLabel}
      isOpen={isOpen}
      onRequestClose={onClose}
      overlayClassName="ReactModalOverlay"
    >
      <Styled ref={ref}>
        {children}
        {showClose && (
          <span
            className="ModalCloseX"
            onClick={() => {
              onClose();
            }}
            role="button"
            tabIndex={0}
          >
            <img alt="x" src="/icons/x-nocircle.svg" />
          </span>
        )}
      </Styled>
    </ReactModal>
  );
};

/*
 * Like StyledComponents' div`` but with added functionality:
 * import { withModal } from 'components/content/Modal';
 * const Modal = withModal({ ...thesePropsWillApplyToAllInstances });
 * <Modal {...optionalUniquePropsForCurrentInstance} />
 */
export const withModal = (props1: Props) => (props2: Props) => {
  return useComponentWithProps12(Modal, props1, props2);
};

/*
 * Default export is a ready-to-use component:
 * Named "Component" export is for Storybook only because Storybook can not read props/docs if wrapped in HOC.
 * Named "Modal" is same as default export. But IDEs like VSCode can read a named import better.
 */
export const Modal = memo(forwardRef(Component));
export default Modal;
