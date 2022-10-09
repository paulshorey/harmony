import { FC, forwardRef, memo, HTMLAttributes, ReactElement } from "react";
import useComponentWithProps12 from "hooks/useComponentWithProps12";
import variants from "@/components/content/atoms/Box/variants";
import ssComponentPropsType from "types/component";
import { htmlContainerTags } from "../../../../types/component";
import useStyled from "@/styles/useStyleProps";

export type Props = HTMLAttributes<HTMLDivElement> &
  ssComponentPropsType & {
    /**
     * HTML element tag name to render. All other aspects of the component (all CSS) will be unchanged.
     */
    as?: htmlContainerTags;
  };

export const Component: (props: Props, ref?: ReactForwardedRef) => ReactElement = ({ as, ...props }, ref) => {
  const [Styled, otherProps] = useStyled(props, as || "div", "Box", variants);
  return <Styled ref={ref} {...otherProps} />;
};

/*
 * Like StyledComponents' div`` but with added functionality:
 * import { withBox } from 'components/content/molecules/Box';
 * const Box = withBox({ ...thesePropsWillApplyToAllInstances });
 * <Box {...optionalUniquePropsForCurrentInstance} />
 */
export const withBox = (props1: Props) => (props2: Props) => {
  return useComponentWithProps12(Box, props1, props2);
};

/*
 * Default export is a ready-to-use component:
 * Named "Component" export is for Storybook only because Storybook can not read props/docs if wrapped in HOC.
 * Named "Box" is same as default export. But IDEs like VSCode can read a named import better.
 */
export const Box = memo(forwardRef(Component));
export default Box;
