import { Props as BoxProps } from '@ps/ui/components/content/Box';
import { memo, useEffect, forwardRef, ReactElement } from 'react';
import ReactModal from 'react-modal';
import variants from './variants';
import withAddPropsToComponent from '@ps/ui/hooks/withAddPropsToComponent';
import useStyledOriginal from '@ps/ui/styles/useStyledOriginal';
import Button from '@ps/ui/components/focus/Button';

export type Props = BoxProps & {
  contentLabel?: string;
  isOpen: boolean;
  label?: string;
  onClose?: any;
  showClose?: boolean;
  type?: string;
};

export const Component: (props: Props, ref?: any) => ReactElement = (
  {
    isOpen,
    onClose = () => {},
    contentLabel = '',
    children,
    showClose = true,
    ShowClose,
    type = '',
    ...props
  },
  ref
) => {
  const [Styled, otherProps] = useStyledOriginal(
    props,
    'div',
    'Modal',
    variants
  );

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

  const ShowCloseButton = ShowClose || (
    <Button
      className="reactModalCloseX"
      onClick={() => {
        onClose();
      }}
      role="button"
      tabIndex={0}
    >
      X
    </Button>
  );

  return (
    <ReactModal
      {...otherProps}
      ariaHideApp={false}
      contentLabel={contentLabel}
      isOpen={isOpen}
      onRequestClose={onClose}
      overlayClassName="reactModalOverlay"
      shouldFocusAfterRender={true}
      shouldReturnFocusAfterClose={true}
    >
      <Styled ref={ref}>
        {children}
        {showClose && ShowCloseButton}
      </Styled>
    </ReactModal>
  );
};

/*
 * Like StyledComponents' styled.div`` but with added functionality:
 * import { withModal } from 'components/focus/Modal';
 * const Modal = withModal({ ...thesePropsWillApplyToAllInstances });
 * <Modal {...optionalUniquePropsForCurrentInstance} />
 */
export const withModal = (props1: Props) => (props2: Props) => {
  return withAddPropsToComponent(Modal, props1, props2);
};

/*
 * Default export is a ready-to-use component:
 * Named "Component" export is for Storybook only because Storybook can not read props/docs if wrapped in HOC.
 * Named "Modal" is same as default export. But IDEs like VSCode can read a named import better.
 */
export const Modal = memo(forwardRef(Component));
export default Modal;
