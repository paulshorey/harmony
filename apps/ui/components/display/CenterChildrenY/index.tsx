import { forwardRef, memo, ReactElement } from 'react';
import withAddPropsToComponent from '@ps/ui/hooks/withAddPropsToComponent';
import variants from './variants';
import Box, { Props as BoxProps } from '@ps/ui/components/display/Box';
import useStyledComponent from '@ps/ui/styles/useStyledComponent';

export type Props = BoxProps;

export const Component: (props: Props, ref?: any) => ReactElement = (
  { as, children, ...props },
  ref
) => {
  const [Styled, otherProps] = useStyledComponent(
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

/*
 * Like StyledComponents' div`` but with added functionality:
 * import { withCenterChildrenY } from 'components/display/CenterChildrenY';
 * const CenterChildrenY = withCenterChildrenY({ ...thesePropsWillApplyToAllInstances });
 * <CenterChildrenY {...optionalUniquePropsForCurrentInstance} />
 */
export const withCenterChildrenY = (props1: Props) => (props2: Props) => {
  return withAddPropsToComponent(CenterChildrenY, props1, props2);
};

/*
 * Default export is a ready-to-use component:
 * Named "Component" export is for Storybook only because Storybook can not read props/docs if wrapped in HOC.
 * Named "CenterChildrenY" is same as default export. But IDEs like VSCode can read a named import better.
 */
export const CenterChildrenY = memo(forwardRef(Component));
export default CenterChildrenY;
