import { forwardRef, memo, ReactElement, HTMLAttributes } from 'react';
import variants from './styles';
// import { Props as ButtonProps } from '@ps/ui/components/focus/Button';
// import { Props as InputProps } from '@ps/ui/components/focus/Input';
import useStyledOriginal from '@ps/ui/styles/useStyledOriginal';
import styleProps from '@ps/ui/types/styles';
import withProps from '@ps/ui/hooks/withProps';

export type Props = styleProps & // ButtonProps & // InputProps & // TODO: would be nice to figure out how to forward props to children elements!
  HTMLAttributes<HTMLDivElement>;

export const Component: (props: Props, ref?: any) => ReactElement = (
  { children, ...props },
  ref
) => {
  const [Styled, otherProps] = useStyledOriginal(
    props,
    'div',
    'InputGroup',
    variants
  );
  return (
    <Styled ref={ref} {...otherProps}>
      {children}
    </Styled>
  );
};

export default memo(forwardRef(Component));

export const withInputGroup = (props: Props) =>
  memo(withProps(forwardRef(Component), props));
