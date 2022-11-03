import { forwardRef, memo, ReactElement, HTMLAttributes } from 'react';
import variants from './styles';
import useStyledOriginal from '@ps/ui/styles/useStyledOriginal';
import styleProps from '@ps/ui/types/styles';
import withProps from '@ps/ui/hooks/withProps';

export type Props = styleProps & HTMLAttributes<HTMLDivElement>;

export const Component: (props: Props, ref?: any) => ReactElement = (
  { children, ...props },
  ref
) => {
  const [Styled, otherProps] = useStyledOriginal(
    props,
    'div',
    'CenterChildrenY',
    variants
  );
  return (
    <Styled ref={ref} {...otherProps}>
      <div>{children}</div>
    </Styled>
  );
};

export default memo(forwardRef(Component));

export const withCenterChildrenY = (props: Props) =>
  memo(withProps(forwardRef(Component), props));
