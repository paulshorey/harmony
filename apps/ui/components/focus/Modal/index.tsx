import { memo, forwardRef, ReactElement } from 'react';
import ReactModal, { ModalProps } from '@mui/material/Modal';
import useStyledProps from '@ps/ui/styles/useStyledProps';
import variants from '@ps/ui/components/focus/Modal/styles';
import withProps from '@ps/ui/hooks/withProps';
import styleProps from '@ps/ui/types/styles';

export type Props = {
  open: boolean;
  onClose?: () => void;
} & ModalProps &
  styleProps;

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
      ref={ref}
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

export default memo(forwardRef(Component));

export const withModal = (props: Props) =>
  memo(withProps(forwardRef(Component), props));
