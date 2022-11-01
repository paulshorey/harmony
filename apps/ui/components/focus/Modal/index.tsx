import { Props as BoxProps } from '@ps/ui/components/content/Box';
import { memo, useEffect, forwardRef, ReactElement } from 'react';
import ReactModal from '@mui/material/Modal';
import withAddPropsToComponent from '@ps/ui/hooks/withAddPropsToComponent';
// import variants from './variants';
// import useStyledOriginal from '@ps/ui/styles/useStyledOriginal';
// import Button from '@ps/ui/components/focus/Button';

export type Props = any;

export const Component: (props: Props, ref?: any) => ReactElement = (
  { open, onClose, ...props },
  ref
) => {
  // const [Styled, otherProps] = useStyledOriginal(
  //   props,
  //   'div',
  //   'Modal',
  //   variants
  // );

  // const ShowCloseButton = ShowClose || (
  //   <Button
  //     className="reactModalCloseX"
  //     onClick={() => {
  //       onClose();
  //     }}
  //     role="button"
  //     tabIndex={0}
  //   >
  //     X
  //   </Button>
  // );

  return (
    <ReactModal
      disablePortal={true}
      // keepMounted={true}
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      {...props}
    />
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
