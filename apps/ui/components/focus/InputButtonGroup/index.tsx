import { forwardRef, memo, ReactElement } from 'react';
import withAddPropsToComponent from '@ps/ui/hooks/withAddPropsToComponent';
import variants from './variants';
import { Props as BoxProps } from '@ps/ui/components/content/Box';
import { Props as ButtonProps } from '@ps/ui/components/focus/Button';
import useStyledOriginal from '@ps/ui/styles/useStyledOriginal';

export type Props = ButtonProps & BoxProps;

export const Component: (props: Props, ref?: any) => ReactElement = (
  { as, round, loading, size, children, ...props },
  ref
) => {
  const [Styled, otherProps] = useStyledOriginal(
    props,
    as || 'div',
    'InputButtonGroup',
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
 * import { withInputButtonGroup } from 'components/content/InputButtonGroup';
 * const InputButtonGroup = withInputButtonGroup({ ...thesePropsWillApplyToAllInstances });
 * <InputButtonGroup {...optionalUniquePropsForCurrentInstance} />
 */
export const withInputButtonGroup = (props1: Props) => (props2: Props) => {
  return withAddPropsToComponent(InputButtonGroup, props1, props2);
};

/*
 * Default export is a ready-to-use component:
 * Named "Component" export is for Storybook only because Storybook can not read props/docs if wrapped in HOC.
 * Named "InputButtonGroup" is same as default export. But IDEs like VSCode can read a named import better.
 */
export const InputButtonGroup = memo(forwardRef(Component));
export default InputButtonGroup;
