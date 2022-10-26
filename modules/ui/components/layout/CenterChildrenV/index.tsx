import { forwardRef, memo, ReactElement } from 'react';
import withAddPropsToComponent from '@ps/ui/hooks/withAddPropsToComponent';
import variants from './variants';
import Block, { Props as BlockProps } from '@ps/ui/components/content/Block';
import useStyledComponent from '@ps/ui/styles/useStyledComponent';

export type Props = BlockProps;

export const Component: (props: Props, ref?: any) => ReactElement = (
  { as, children, ...props },
  ref
) => {
  const [Styled, otherProps] = useStyledComponent(
    props,
    'div',
    'CenterChildrenV',
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
 * import { withCenterChildrenV } from 'components/content/CenterChildrenV';
 * const CenterChildrenV = withCenterChildrenV({ ...thesePropsWillApplyToAllInstances });
 * <CenterChildrenV {...optionalUniquePropsForCurrentInstance} />
 */
export const withCenterChildrenV = (props1: Props) => (props2: Props) => {
  return withAddPropsToComponent(CenterChildrenV, props1, props2);
};

/*
 * Default export is a ready-to-use component:
 * Named "Component" export is for Storybook only because Storybook can not read props/docs if wrapped in HOC.
 * Named "CenterChildrenV" is same as default export. But IDEs like VSCode can read a named import better.
 */
export const CenterChildrenV = memo(forwardRef(Component));
export default CenterChildrenV;
