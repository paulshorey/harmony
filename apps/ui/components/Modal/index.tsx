import React, { memo, forwardRef } from 'react';
import ReactModal, { ModalProps } from '@mui/material/Modal';
import variants from '@ps/ui/components/Modal/styles';
import withCombinedProps from '@ps/ui/hooks/withCombinedProps';
import styleProps from '@ps/ui/types/styles';
import withStyles from '@ps/ui/hooks/withStyles';

export type Props = {
  open: boolean;
  onClose?: () => void;
} & ModalProps &
  styleProps;

// @ts-ignore tsFix: Forwarding ref probably wont work: Type 'Ref<unknown> | undefined' is not assignable to type '((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null | undefined'.
export const Component: React.FC<Props> = withStyles(
  forwardRef(({ open, onClose, children, ...props }: Props, ref?: any) => {
    const reff = React.useRef(ref);
    return (
      <ReactModal
        ref={reff}
        disablePortal={true}
        // keepMounted={true}
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        {...props}
      >
        {children}
      </ReactModal>
    );
  }),
  'Modal',
  variants
);

/*
 * (1) default export is normal component ready to use (2) withModal is HOC used to predefine common props
 */

export default memo(Component);

export const withModal = (props: Props) =>
  memo(withCombinedProps(Component, props));
