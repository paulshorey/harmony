import { FC, forwardRef, memo, HTMLAttributes, ReactElement } from 'react';
import useComponentWithProps12 from 'hooks/useComponentWithProps12';
import variants from 'components/content/atoms/Block/variants';
import ssComponentPropsType from 'types/component';
import { htmlContainerTags } from '../../../../types/component';
import useStyledVariants from 'styles/useStyledVariants';

export type Props = HTMLAttributes<HTMLDivElement> &
  ssComponentPropsType & {
    /**
     * HTML element tag name to render. All other aspects of the component (all CSS) will be unchanged.
     */
    as?: htmlContainerTags;
  };

export const Component: (
  props: Props,
  ref?: ReactForwardedRef
) => ReactElement = ({ as, ...props }, ref) => {
  const Styled = useStyledVariants(props, as || 'div', 'Block', variants);
  return <Styled ref={ref} {...props} />;
};

/*
 * Like StyledComponents' div`` but with added functionality:
 * import { withBlock } from 'components/content/molecules/Block';
 * const Block = withBlock({ ...thesePropsWillApplyToAllInstances });
 * <Block {...optionalUniquePropsForCurrentInstance} />
 */
export const withBlock = (props1: Props) => (props2: Props) => {
  return useComponentWithProps12(Block, props1, props2);
};

/*
 * Default export is a ready-to-use component:
 * Named "Component" export is for Storybook only because Storybook can not read props/docs if wrapped in HOC.
 * Named "Block" is same as default export. But IDEs like VSCode can read a named import better.
 */
export const Block = memo(forwardRef(Component));
export default Block;
