import React from 'react';
import withStyles from 'styles/withStyles';
import { FC, forwardRef, memo, HTMLAttributes } from 'react';
import useComponentWithProps12 from 'hooks/useComponentWithProps12';
import variants from 'components/content/atoms/Div/variants';
import ComponentPropsType from 'types/component';
import { HtmlContainerTags } from '../../../../types/component';
// import { * as

export type Props = HTMLAttributes<HTMLDivElement> & {
  /**
   * HTML element tag name to render. All other aspects of the component (all CSS) will be unchanged.
   */
  as?: HtmlContainerTags;
} & ComponentPropsType;

export const Component: React.FC<Props> = ({ as = 'div', ...props }) => {
  const TagName = `${as}` as any;
  return <TagName {...props} />;
};

/*
 * Copy/paste everything below to sync code between components. Then change the name of the variables.
 */
const Default = memo(withStyles(Component, 'Div', variants));

/*
 * This is an HOC, like Styled in @emotion/styled or Styled-Components, to help with styling, and managing props.
 * First you must call it with an object of props which will be used by all instances.
 * Then, you can use the returned value as a normal component. Pass to it props that only the specific instance will use.
 * Can not abstract this to a separate file, because Typescript does not support passing props as args.
 */
export const withDiv = (props1: Props) => (props2: Props) => {
  return useComponentWithProps12(Default, props1, props2);
};

/**
 * Default export is ready to use: <Div {...yourProps} />
 */
export const Div = Default;
export default Default;
