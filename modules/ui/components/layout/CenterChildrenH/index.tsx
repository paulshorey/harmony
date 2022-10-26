import { forwardRef, memo, ReactElement } from 'react';
import withAddPropsToComponent from '@ps/ui/hooks/withAddPropsToComponent';
import variants from './variants';
import Block, { Props as BlockProps } from '@ps/ui/components/content/Block';
import useStyledComponent from '@ps/ui/styles/useStyledComponent';

export type Props = BlockProps;

export const Component: (
  props: Props,
  ref?: ReactForwardedRef
) => ReactElement = ({ as, children, ...props }, ref) => {
  const [Styled, otherProps] = useStyledComponent(
    props,
    'div',
    'CenterChildrenH',
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
 * import { withCenterChildrenH } from 'components/content/CenterChildrenH';
 * const CenterChildrenH = withCenterChildrenH({ ...thesePropsWillApplyToAllInstances });
 * <CenterChildrenH {...optionalUniquePropsForCurrentInstance} />
 */
export const withCenterChildrenH = (props1: Props) => (props2: Props) => {
  return withAddPropsToComponent(CenterChildrenH, props1, props2);
};

/*
 * Default export is a ready-to-use component:
 * Named "Component" export is for Storybook only because Storybook can not read props/docs if wrapped in HOC.
 * Named "CenterChildrenH" is same as default export. But IDEs like VSCode can read a named import better.
 */
export const CenterChildrenH = memo(forwardRef(Component));
export default CenterChildrenH;
