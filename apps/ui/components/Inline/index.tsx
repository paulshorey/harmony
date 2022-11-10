import React, { memo, HTMLAttributes, forwardRef } from 'react';
import { styleProps } from '@ps/ui/types/styles';
import variants from './styles';
import withCombinedProps from '@ps/ui/hooks/withCombinedProps';
import withStyles from '@ps/ui/hooks/withStyles';
import styled from '@emotion/styled';

export type Props = styleProps & HTMLAttributes<HTMLDivElement>;

/*
 * Base element (like a div) for rendering a block of content
 */
export const Component: React.FC<Props> = withStyles(
  forwardRef((props: Props, ref: any) => {
    return <Styled ref={ref} {...props} />;
  }),
  'Inline',
  variants
);

/*
 * (1) default export is normal component ready to use (2) withInline is HOC used to predefine common props
 */

export default memo(Component);

export const withInline = (props: Props) =>
  memo(withCombinedProps(Component, props));

const Styled = styled('div')``;
