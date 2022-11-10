import React, { memo, HTMLAttributes, forwardRef } from 'react';
import { styleProps } from '@ps/ui/types/styles';
import variants from './styles';
import withCombinedProps from '@ps/ui/hooks/withCombinedProps';
import withStyles from '@ps/ui/hooks/withStyles';
import styled from '@emotion/styled';

export type Props = styleProps & HTMLAttributes<HTMLDivElement>;

/*
 * Most basic element (like a div) for rendering a block of content
 */
export const Component: React.FC<Props> = withStyles(
  forwardRef((props: Props, ref: any) => {
    return <Styled ref={ref} {...props} />;
  }),
  'Block',
  variants
);

/*
 * (1) default export is normal component ready to use (2) withBlock is HOC used to predefine common props
 */

export default memo(Component);

export const withBlock = (props: Props) =>
  memo(withCombinedProps(Component, props));

const Styled = styled('div')``;
