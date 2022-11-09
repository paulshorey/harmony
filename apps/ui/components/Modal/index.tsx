import React, { memo, forwardRef, ReactElement } from 'react';
import ReactModal, { ModalProps } from '@mui/material/Modal';
import variants from '@ps/ui/components/Modal/styles';
import withCombinedProps from '@ps/ui/hooks/withCombinedProps';
import styleProps from '@ps/ui/types/styles';
import style_string_from_props_and_variants from '@ps/ui/helpers/style_string_from_props_and_variants';
import styled from 'styled-components';
import style_data_set from '@ps/ui/helpers/style_data_set';

export type Props = {
  open: boolean;
  onClose?: () => void;
} & ModalProps &
  styleProps;

export const Component: (props: Props, ref?: any) => ReactElement = (
  { open, onClose, ...props },
  ref
) => {
  const styleDataSet = style_data_set('Modal', props);
  return (
    <StyledComponent
      ref={ref}
      disablePortal={true}
      // keepMounted={true}
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      {...props}
      {...styleDataSet}
    />
  );
};

/*
 * Under the hood: (1) default export ready to use (2) named export HOC (3) styled component
 */
export default memo(forwardRef(Component));

export const withLink = (props: Props) =>
  memo(withCombinedProps(forwardRef(Component), props));

// styled "ReactModal" can be overriden by passing props.as="article" or any HTML tag
const StyledComponent = styled(ReactModal)`
  ${(props) =>
    style_string_from_props_and_variants({
      props,
      variants,
    })}
`;
