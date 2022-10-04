import Block from 'components/content/atoms/Block';
import withStyles from 'styles/withStyles';
import { FC, forwardRef, memo, HTMLAttributes } from 'react';
import objects_add_values from '@ps/fn/io/objects/objects_add_values';
import variants from './variants';
import { Props as BlockProps } from 'components/content/atoms/Block';

export type Props = BlockProps;

/**
 * IMPORTANT:
 * title, text, and image must each contain exactly one React JSX child. DO NOT USE the React.Fragment <></>
 */
export const Component = forwardRef(
  ({ image, text, title, ...props }: any, ref) => {
    return (
      <Block ref={ref} {...props}>
        <div className="Grid4TitleTextImage-title">{title}</div>
        <div className="Grid4TitleTextImage-text">{text}</div>
        <div className="Grid4TitleTextImage-image">{image}</div>
      </Block>
    );
  }
);

/*
 * Copy/paste everything below to sync code between components. Then change the name of the variables.
 */
const Default = memo(withStyles(Component, 'Grid4TitleTextImage', variants));

/*
 * This is an HOC, like Styled in @emotion/styled or Styled-Components, to help with styling, and managing props.
 * First you must call it with an object of props which will be used by all instances.
 * Then, you can use the returned value as a normal component. Pass to it props that only the specific instance will use.
 * Can not abstract this to a separate file, because Typescript does not support passing props as args.
 */
export const withGrid4TitleTextImage = (props1: Props) => (props2: Props) => {
  const props = objects_add_values(
    props1,
    props2,
    ';',
    ['children'],
    ['ss'],
    'props'
  );
  return <Default {...props} children={props2.children} />;
};

/**
 * Default export is ready to use: <Grid4TitleTextImage {...yourProps} />
 */
export default Default;
