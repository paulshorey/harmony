import React, { memo, HTMLAttributes, forwardRef } from 'react';
import { styleProps } from '@ps/ui/types/styles';
import variants from './styles';
import withCombinedProps from '@ps/ui/hooks/withCombinedProps';
import withStyles from '@ps/ui/hooks/withStyles';

export type Props = styleProps & HTMLAttributes<HTMLDivElement>;

/*
 * Base element (like a div) for rendering a block of content
 */
export const Component = (props: Props, ref: any) => {
  return <span ref={ref} {...props} />;
};

/*
 * (1) default export is normal component ready to use (2) withInline is HOC used to predefine common props
 */
const Styled: React.FC<Props> = withStyles(
  forwardRef(Component),
  'Inline',
  variants
);

export default memo(Styled);

export const withInline = (props: Props) =>
  memo(withCombinedProps(Styled, props));
