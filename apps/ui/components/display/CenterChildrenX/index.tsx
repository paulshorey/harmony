import { forwardRef, memo, ReactElement } from 'react';
import withAddPropsToComponent from '@ps/ui/hooks/withAddPropsToComponent';
import variants from './variants';
import { Props as BoxProps } from '@ps/ui/components/display/Box';
import useStyledComponent from '@ps/ui/styles/useStyledComponent';

export type Props = BoxProps;

export const Component: (props: Props, ref?: any) => ReactElement = (
  { as, children, ...props },
  ref
) => {
  const [Styled, otherProps] = useStyledComponent(
    props,
    'div',
    'CenterChildrenX',
    variants
  );
  return (
    <Styled ref={ref} {...otherProps}>
      {children}
    </Styled>
  );
};

/*
 * Like StyledComponents' div`` but with added functionality:
 * import { withCenterChildrenX } from 'components/display/CenterChildrenX';
 * const CenterChildrenX = withCenterChildrenX({ ...thesePropsWillApplyToAllInstances });
 * <CenterChildrenX {...optionalUniquePropsForCurrentInstance} />
 */
export const withCenterChildrenX = (props1: Props) => (props2: Props) => {
  return withAddPropsToComponent(CenterChildrenX, props1, props2);
};

/*
 * Default export is a ready-to-use component:
 * Named "Component" export is for Storybook only because Storybook can not read props/docs if wrapped in HOC.
 * Named "CenterChildrenX" is same as default export. But IDEs like VSCode can read a named import better.
 */
export const CenterChildrenX = memo(forwardRef(Component));
export default CenterChildrenX;
