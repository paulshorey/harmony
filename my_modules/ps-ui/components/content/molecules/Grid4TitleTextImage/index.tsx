import { FC, forwardRef, memo, HTMLAttributes, ReactElement } from "react";
import useComponentWithProps12 from "hooks/useComponentWithProps12";
import variants from "./variants";
import { Props as BoxProps } from "@/components/content/atoms/Box";
import useStyleProps from "@/styles/useStyleProps";

export type Props = BoxProps;

/**
 * IMPORTANT:
 * title, text, and image must each contain exactly one React JSX child. DO NOT USE the React.Fragment <></>
 */
export const Component: (props: Props, ref?: ReactForwardedRef) => ReactElement = ({ image, text, title, as, ...props }: any, ref?: any) => {
  const [Styled, otherProps] = useStyleProps(props, as || "div", "Grid4TitleTextImage", variants);
  return (
    <Styled ref={ref} {...otherProps}>
      <div className="Grid4TitleTextImage-title">{title}</div>
      <div className="Grid4TitleTextImage-text">{text}</div>
      <div className="Grid4TitleTextImage-image">{image}</div>
    </Styled>
  );
};

/*
 * Like StyledComponents' div`` but with added functionality.
 * import { withGrid4TitleTextImage } from 'components/content/molecules/Grid4TitleTextImage';
 * const Grid4TitleTextImage = withGrid4TitleTextImage({ ...thesePropsWillApplyToAllInstances });
 * <Grid4TitleTextImage {...optionalUniquePropsForCurrentInstance} />
 */
export const withGrid4TitleTextImage = (props1: Props) => (props2: Props) => {
  return useComponentWithProps12(Grid4TitleTextImage, props1, props2);
};

/*
 * Default export is a ready-to-use component:
 * Named "Component" export is for Storybook only because Storybook can not read props/docs if wrapped in HOC.
 * Named "Grid4TitleTextImage" is same ad default export. But IDEs like VSCode can read a named import better.
 */
export const Grid4TitleTextImage = memo(forwardRef(Component));
export default Grid4TitleTextImage;
