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

export const Component: (
  props: Props,
  ref?: ReactForwardedRef
) => ReactElement = ({ as, ...props }, ref) => {
  const [Styled, otherProps] = useStyledComponent(
    props,
    as || 'svg',
    'Svg',
    variants
  );
  return <Styled ref={ref} {...otherProps} />;
};

/*
 * Like StyledComponents' div`` but with added functionality:
 * import { withSvg } from 'components/content/Svg';
 * const Svg = withSvg({ ...thesePropsWillApplyToAllInstances });
 * <Svg {...optionalUniquePropsForCurrentInstance} />
 */
export const withSvg = (props1: Props) => (props2: Props) => {
  return withAddPropsToComponent(Svg, props1, props2);
};

/*
 * Default export is a ready-to-use component:
 * Named "Component" export is for Storybook only because Storybook can not read props/docs if wrapped in HOC.
 * Named "Svg" is same as default export. But IDEs like VSCode can read a named import better.
 */
export const Svg = memo(forwardRef(Component));
export default Svg;
