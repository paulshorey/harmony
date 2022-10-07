import { forwardRef, memo, ReactElement } from 'react';
import useComponentWithProps12 from 'hooks/useComponentWithProps12';
import variants from './variants';
import Block, { Props as BlockProps } from 'components/content/atoms/Block';
import useStyledVariants from 'styles/useStyledVariants';

export type Props = BlockProps;

export const Component: (
  props: Props,
  ref?: ReactForwardedRef
) => ReactElement = ({ as, ...props }, ref) => {
  const Styled = useStyledVariants(props, as || 'div', 'Card', variants);
  return <Styled ref={ref} {...props} />;
};

/*
 * Like StyledComponents' div`` but with added functionality:
 * import { withCard } from 'components/content/molecules/Card';
 * const Card = withCard({ ...thesePropsWillApplyToAllInstances });
 * <Card {...optionalUniquePropsForCurrentInstance} />
 */
export const withCard = (props1: Props) => (props2: Props) => {
  return useComponentWithProps12(Card, props1, props2);
};

/*
 * Default export is a ready-to-use component:
 * Named "Component" export is for Storybook only because Storybook can not read props/docs if wrapped in HOC.
 * Named "Card" is same as default export. But IDEs like VSCode can read a named import better.
 */
export const Card = memo(forwardRef(Component));
export default Card;
