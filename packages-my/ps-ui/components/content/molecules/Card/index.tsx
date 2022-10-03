import withStyles from 'styles/withStyles';
import { FC, forwardRef, memo } from 'react';

import objects_add_values from '@ps/fn/io/objects/objects_add_values';
import variants from './variants';
import {
  BlockProps,
  BlockUnstyled,
} from '@ps/ui/components/content/atoms/Block';

/**
 * This is to render simple non-interactive read-only elements like span/div/p/h1/sup/a/center.
 * For interactive form elements, use something more specific like components/form/atoms/Input.
 */
export type CardProps = BlockProps;

/**
 * This named Component is only for index.storybook.tsx. Storybook will read Types from it.
 * It can not read types if the component is wrapped in an HOC, like this default export.
 * It will also read THIS description. So instead, write the description in ./_story.md
 */
export const CardUnstyled: FC<CardProps> = forwardRef(
  ({ as = 'div', ...props }, refFromParent) => {
    return <BlockUnstyled as={as} {...props} ref={refFromParent} />;
  }
);
const CardReadyToUse = memo(withStyles(CardUnstyled, 'Card', variants));

/**
 * This is an HOC, like Styled in @emotion/styled or Styled-Components, to help with styling, and managing props.
 * First you must call it with an object of props which will be used by all instances.
 * Then, you can use the returned value as a normal component. Pass to it props that only the specific instance will use.
 */
export const CardHOC = (props1: CardProps) => (props2: CardProps) => {
  const props = objects_add_values(props1, props2, ';', ['children']);
  return <CardReadyToUse {...props} children={props2.children} />;
};

/**
 * Default export wrapped in useful HOC. Ready to use in your JSX. Usage: <Card {...yourProps} />
 */
export default CardReadyToUse;
