import { FC, forwardRef, memo, HTMLAttributes, ReactElement } from 'react';
import withAddPropsToComponent from '@ps/ui/hooks/withAddPropsToComponent';
import ssComponentPropsType from '@ps/ui/types/component';
import { styledTags } from '@ps/ui/types/component';
import variants from './variants';
import useStyledOriginal from '@ps/ui/styles/useStyledOriginal';

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
  const [Styled, otherProps] = useStyledOriginal(
    props,
    as || 'div',
    'Box',
    variants
  );
  return <Styled ref={ref} {...otherProps} />;
};

/*
 * Like StyledComponents' styled.div`` but with added functionality:
 * import { withBox } from 'components/content/Box';
 * const Box = withBox({ ...thesePropsWillApplyToAllInstances });
 * <Box {...optionalUniquePropsForCurrentInstance} />
 */
export const withBox = (props1: Props) => (props2: Props) => {
  return withAddPropsToComponent(Box, props1, props2);
};

/*
 * Default export is a ready-to-use component:
 * Named "Component" export is for Storybook only because Storybook can not read props/docs if wrapped in HOC.
 * Named "Box" is same as default export. But IDEs like VSCode can read a named import better.
 */
export const Box = memo(forwardRef(Component));
export default Box;
