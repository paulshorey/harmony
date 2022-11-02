import { forwardRef, memo, ReactElement, HTMLAttributes } from 'react';
import withAddPropsToComponent from '@ps/ui/hooks/withAddPropsToComponent';
import variants from './variants';
// import { Props as ButtonProps } from '@ps/ui/components/focus/Button';
// import { Props as InputProps } from '@ps/ui/components/focus/Input';
import useStyledOriginal from '@ps/ui/styles/useStyledOriginal';
import styleProps from '@ps/ui/types/styles';

export type Props =
  // TODO: would be nice to figure out how to forward props to children elements!
  // InputProps &
  // ButtonProps &
  styleProps & HTMLAttributes<HTMLDivElement>;

export const Component: (props: Props, ref?: any) => ReactElement = (
  { as, round, loading, size, children, ...props },
  ref
) => {
  const [Styled, otherProps] = useStyledOriginal(
    props,
    as || 'div',
    'InputGroup',
    variants
  );
  return (
    <Styled ref={ref} {...otherProps}>
      {children}
    </Styled>
  );
};

/*
 * Like StyledComponents' styled.div`` but with added functionality:
 * import { withInputGroup } from 'components/content/InputGroup';
 * const InputGroup = withInputGroup({ ...thesePropsWillApplyToAllInstances });
 * <InputGroup {...optionalUniquePropsForCurrentInstance} />
 */
export const withInputGroup = (props1: Props) => (props2: Props) => {
  return withAddPropsToComponent(InputGroup, props1, props2);
};

/*
 * Default export is a ready-to-use component:
 * Named "Component" export is for Storybook only because Storybook can not read props/docs if wrapped in HOC.
 * Named "InputGroup" is same as default export. But IDEs like VSCode can read a named import better.
 */
export const InputGroup = memo(forwardRef(Component));
export default InputGroup;
