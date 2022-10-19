import { forwardRef, memo, ReactElement } from 'react';
import withAddPropsToComponent from '@ps/ui/hooks/withAddPropsToComponent';
import variants from './variants';
import Box, { Props as BoxProps } from '@ps/ui/components/content/Box';
import useStyledComponent from '@ps/ui/styles/useStyledComponent';

export type Props = BoxProps;

export const Component: (
  props: Props,
  ref?: ReactForwardedRef
) => ReactElement = ({ as, ...props }, ref) => {
  const [Styled, otherProps] = useStyledComponent(
    props,
    as || 'div',
    'Card',
    variants
  );
  return <Styled ref={ref} {...otherProps} />;
};

/*
 * Like StyledComponents' div`` but with added functionality:
 * import { withCard } from 'components/content/Card';
 * const Card = withCard({ ...thesePropsWillApplyToAllInstances });
 * <Card {...optionalUniquePropsForCurrentInstance} />
 */
export const withCard = (props1: Props) => (props2: Props) => {
  return withAddPropsToComponent(Card, props1, props2);
};

/*
 * Default export is a ready-to-use component:
 * Named "Component" export is for Storybook only because Storybook can not read props/docs if wrapped in HOC.
 * Named "Card" is same as default export. But IDEs like VSCode can read a named import better.
 */
export const Card = memo(forwardRef(Component));
export default Card;