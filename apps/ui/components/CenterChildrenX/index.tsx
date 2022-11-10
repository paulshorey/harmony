import React, { forwardRef, memo, HTMLAttributes } from 'react';
import variants from './styles';
import styleProps from '@ps/ui/types/styles';
import withCombinedProps from '@ps/ui/hooks/withCombinedProps';
import withStyles from '@ps/ui/hooks/withStyles';
import styled from '@emotion/styled';

export type Props = styleProps & HTMLAttributes<HTMLDivElement>;

export const Component: React.FC<Props> = withStyles(
  forwardRef((props: Props, ref: any) => {
    return <Styled ref={ref} {...props} />;
  }),
  'CenterChildrenX',
  variants
);

/*
 * (1) default export is normal component ready to use (2) withCenterChildrenX is HOC used to predefine common props
 */

export default memo(Component);

export const withCenterChildrenX = (props: Props) =>
  memo(withCombinedProps(Component, props));

const Styled = styled('div')``;
