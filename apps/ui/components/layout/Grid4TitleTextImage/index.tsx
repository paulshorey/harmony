import { FC, forwardRef, memo, HTMLAttributes, ReactElement } from 'react';
import withAddPropsToComponent from '@ps/ui/hooks/withAddPropsToComponent';
import variants from './variants';
import { Props as BlockProps } from '@ps/ui/components/content/Block';
import useStyledOriginal from '@ps/ui/styles/useStyledOriginal';

export type Props = BlockProps;

/**
 * IMPORTANT:
 * title, text, and image must each contain exactly one React JSX child. DO NOT USE the React.Fragment <></>
 */
export const Component: (props: Props, ref?: any) => ReactElement = (
  { image, text, title, as, ...props }: any,
  ref?: any
) => {
  const [Styled, otherProps] = useStyledOriginal(
    props,
    as || 'div',
    'Grid4TitleTextImage',
    variants
  );
  return (
    <Styled ref={ref} {...otherProps}>
      <div className="Grid4TitleTextImage-title">{title}</div>
      <div className="Grid4TitleTextImage-text">{text}</div>
      <div className="Grid4TitleTextImage-image">{image}</div>
    </Styled>
  );
};

/*
 * Like StyledComponents' styled.div`` but with added functionality.
 * import { withGrid4TitleTextImage } from 'components/content/Grid4TitleTextImage';
 * const Grid4TitleTextImage = withGrid4TitleTextImage({ ...thesePropsWillApplyToAllInstances });
 * <Grid4TitleTextImage {...optionalUniquePropsForCurrentInstance} />
 */
export const withGrid4TitleTextImage = (props1: Props) => (props2: Props) => {
  return withAddPropsToComponent(Grid4TitleTextImage, props1, props2);
};

/*
 * Default export is a ready-to-use component:
 * Named "Component" export is for Storybook only because Storybook can not read props/docs if wrapped in HOC.
 * Named "Grid4TitleTextImage" is same ad default export. But IDEs like VSCode can read a named import better.
 */
export const Grid4TitleTextImage = memo(forwardRef(Component));
export default Grid4TitleTextImage;
