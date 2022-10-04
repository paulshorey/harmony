import React from 'react';
import withStyles from 'styles/withStyles';
import { FC, forwardRef, memo, HTMLAttributes } from 'react';
import objects_add_values from '@ps/fn/io/objects/objects_add_values';
import variants from 'components/content/atoms/Block/variants';
import ComponentPropsType from 'types/component';
import { HtmlContainerTags } from '../../../../types/component';

export type Props = HTMLAttributes<HTMLDivElement> &
  ComponentPropsType & {
    /**
     * HTML element tag name to render. All other aspects of the component (all CSS) will be unchanged.
     */
    as?: HtmlContainerTags;
  };

export const Component: React.FC<Props> = ({ as = 'div', ...props }) => {
  const TagName = `${as}` as any;
  return <TagName {...props} />;
};

/*
 * Copy/paste everything below to sync code between components. Then change the name of the variables.
 */
const Default = memo(withStyles(Component, 'Block', variants));

/*
 * This is an HOC, like Styled in @emotion/styled or Styled-Components, to help with styling, and managing props.
 * First you must call it with an object of props which will be used by all instances.
 * Then, you can use the returned value as a normal component. Pass to it props that only the specific instance will use.
 * Can not abstract this to a separate file, because Typescript does not support passing props as args.
 */
export const withBlock = (props1: Props) => (props2: Props) => {
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
 * Default export is ready to use: <Block {...yourProps} />
 */
export const Block = Default;
export default Default;
