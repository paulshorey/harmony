import withStyles from 'styles/withStyles';
import { FC, forwardRef, memo } from 'react';

import useComponentWithProps12 from 'hooks/useComponentWithProps12';
import variants from './variants';
import Block, { Props as BlockProps } from 'components/content/atoms/Block';

export type Props = BlockProps;
export const Component = Block;

/*
 * Copy/paste everything below to sync code between components. Then change the name of the variables.
 */
const Default = memo(withStyles(Component, 'Card', variants));

/*
 * This is an HOC, like Styled in @emotion/styled or Styled-Components, to help with styling, and managing props.
 * First you must call it with an object of props which will be used by all instances.
 * Then, you can use the returned value as a normal component. Pass to it props that only the specific instance will use.
 * Can not abstract this to a separate file, because Typescript does not support passing props as args.
 */
export const withCard = (props1: Props) => (props2: Props) => {
  return useComponentWithProps12(Default, props1, props2);
};

/**
 * Default export is ready to use: <Card {...yourProps} />
 */
export const Card = Default;
export default Default;
