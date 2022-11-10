import React, { forwardRef, memo, HTMLAttributes } from 'react';
import variants from './styles';
// import { Props as ButtonProps } from '@ps/ui/components/Button';
// import { Props as InputProps } from '@ps/ui/components/Input';
import styleProps from '@ps/ui/types/styles';
import withCombinedProps from '@ps/ui/hooks/withCombinedProps';
import withStyles from '@ps/ui/hooks/withStyles';
import styled from '@emotion/styled';

export type Props = styleProps & // ButtonProps & // InputProps & // TODO: would be nice to figure out how to forward props to children elements!
  HTMLAttributes<HTMLDivElement>;

export const Component: React.FC<Props> = withStyles(
  forwardRef(({ children, ...props }: Props, ref: any) => {
    return (
      <Styled ref={ref} {...props}>
        {children}
      </Styled>
    );
  }),
  'InputGroup',
  variants
);

/*
 * (1) default export is normal component ready to use (2) withInputGroup is HOC used to predefine common props
 */

export default memo(Component);

export const withInputGroup = (props: Props) =>
  memo(withCombinedProps(Component, props));

const Styled = styled('div')``;
