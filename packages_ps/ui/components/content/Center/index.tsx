import { forwardRef, memo, ReactElement } from 'react';
import useComponentWithProps12 from '@ps/ui/hooks/useComponentWithProps12';
import variants from './variants';
import Box, { Props as BoxProps } from '@ps/ui/components/content/Box';
import useStyledComponent from '@ps/ui/styles/useStyledComponent';

export type Props = BoxProps;

export const Component: (
  props: Props,
  ref?: ReactForwardedRef
) => ReactElement = ({ as, children, ...props }, ref) => {
  const [Styled, otherProps] = useStyledComponent(
    props,
    as || 'div',
    'Center',
    variants
  );
  return (
    <Styled ref={ref} {...otherProps}>
      <span>{children}</span>
    </Styled>
  );
};

/*
 * Like StyledComponents' div`` but with added functionality:
 * import { withCenter } from 'components/content/Center';
 * const Center = withCenter({ ...thesePropsWillApplyToAllInstances });
 * <Center {...optionalUniquePropsForCurrentInstance} />
 */
export const withCenter = (props1: Props) => (props2: Props) => {
  return useComponentWithProps12(Center, props1, props2);
};

/*
 * Default export is a ready-to-use component:
 * Named "Component" export is for Storybook only because Storybook can not read props/docs if wrapped in HOC.
 * Named "Center" is same as default export. But IDEs like VSCode can read a named import better.
 */
export const Center = memo(forwardRef(Component));
export default Center;
