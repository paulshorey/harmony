import { FC, forwardRef, memo, HTMLAttributes, ReactElement } from 'react';
import withAddPropsToComponent from '@ps/ui/hooks/withAddPropsToComponent';
import ssComponentPropsType from '@ps/ui/types/component';
import { styledTags } from '@ps/ui/types/component';
import variants from './variants';
import useStyledComponent from '@ps/ui/styles/useStyledComponent';

export type Props = HTMLAttributes<HTMLDivElement> &
  ssComponentPropsType & {
    /**
     * HTML element tag name to render. All other aspects of the component (all CSS) will be unchanged.
     */
    as?: styledTags;
  } & Record<string, any>;

export const Component: (props: Props, ref?: any) => ReactElement = (
  { as, ...props },
  ref
) => {
  const [Styled, otherProps] = useStyledComponent(
    props,
    as || 'div',
    'Block',
    variants
  );
  return <Styled ref={ref} {...otherProps} />;
};

/*
 * Like StyledComponents' div`` but with added functionality:
 * import { withBlock } from 'components/content/Block';
 * const Block = withBlock({ ...thesePropsWillApplyToAllInstances });
 * <Block {...optionalUniquePropsForCurrentInstance} />
 */
export const withBlock = (props1: Props) => (props2: Props) => {
  return withAddPropsToComponent(Block, props1, props2);
};

/*
 * Default export is a ready-to-use component:
 * Named "Component" export is for Storybook only because Storybook can not read props/docs if wrapped in HOC.
 * Named "Block" is same as default export. But IDEs like VSCode can read a named import better.
 */
export const Block = memo(forwardRef(Component));
export default Block;
