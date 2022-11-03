import { forwardRef, memo, ReactElement, HTMLAttributes } from 'react';
import variants from './styles';
import useStyledOriginal from '@ps/ui/styles/useStyledOriginal';
import styleProps from '@ps/ui/types/styles';
import withProps from '@ps/ui/hooks/withProps';

export type Props = {
  code?: string;
} & styleProps &
  HTMLAttributes<HTMLDivElement>;

export const Component: (props: Props, ref?: any) => ReactElement = (
  { code, children, ...props },
  ref
) => {
  const [Styled, otherProps] = useStyledOriginal(
    props,
    'code',
    'CodeInline',
    variants
  );
  return (
    <Styled ref={ref} {...otherProps}>
      <span>{code || children}</span>
    </Styled>
  );
};

export default memo(forwardRef(Component));

export const withCodeInline = (props: Props) =>
  memo(withProps(forwardRef(Component), props));
