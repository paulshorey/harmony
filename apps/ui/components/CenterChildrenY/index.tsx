import React, { forwardRef, memo, HTMLAttributes } from 'react';
import variants from './styles';
import styleProps from '@ps/ui/types/styles';
import withCombinedProps from '@ps/ui/hooks/withCombinedProps';
import withStyles from '@ps/ui/hooks/withStyles';

export type Props = styleProps & HTMLAttributes<HTMLDivElement>;

export const Component = ({ children, ...props }: Props, ref: any) => {
  return (
    <div ref={ref} {...props}>
      <div>{children}</div>
    </div>
  );
};

/*
 * (1) default export is normal component ready to use (2) withCenterChildrenY is HOC used to predefine common props
 */
const Styled: React.FC<Props> = withStyles(
  forwardRef(Component),
  'CenterChildrenY',
  variants
);

export default memo(Styled);

export const withCenterChildrenY = (props: Props) =>
  memo(withCombinedProps(Styled, props));
