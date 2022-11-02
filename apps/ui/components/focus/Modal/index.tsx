import { Props as BlockProps } from '@ps/ui/components/content/Block';
import { memo, useEffect, forwardRef, ReactElement } from 'react';
import ReactModal from '@mui/material/Modal';
import withAddPropsToComponent from '@ps/ui/hooks/withAddPropsToComponent';
import useStyledProps from '@ps/ui/styles/useStyledProps';
import variants from '@ps/ui/components/focus/Modal/variants';

export type Props = any;

export const Component: (props: Props, ref?: any) => ReactElement = (
  { open, onClose, ...props },
  ref
) => {
  const styledProps = useStyledProps({
    props,
    componentName: 'Modal',
    variants,
  });
  return (
    <ReactModal
      disablePortal={true}
      // keepMounted={true}
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      {...styledProps}
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
