import { forwardRef, memo, ReactElement, HTMLAttributes } from 'react';
import withAddPropsToComponent from '@ps/ui/hooks/withAddPropsToComponent';
import variants from './variants';
import Block, { Props as BlockProps } from '@ps/ui/components/content/Block';
import useStyledOriginal from '@ps/ui/styles/useStyledOriginal';
import styleProps from '@ps/ui/types/styles';

export type Props = styleProps & HTMLAttributes<HTMLDivElement>;

export const Component: (props: Props, ref?: any) => ReactElement = (
  { as, children, ...props },
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

/*
 * Like StyledComponents' styled.div`` but with added functionality:
 * import { withCenterChildrenY } from 'components/content/CenterChildrenY';
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
