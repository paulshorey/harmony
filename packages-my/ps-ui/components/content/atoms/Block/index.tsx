import { ReactFCProps, StyleProps } from '@ps/ui/types/component';
import withStyles from 'hooks/withStyles';
import { FC, forwardRef, HTMLAttributes, memo } from 'react';

import objects_add_values from '@ps/fn/io/objects/objects_add_values';
import variants from './variants';
/**
 * This is to render simple non-interactive read-only elements like span/div/p/h1/sup/a/center.
 * For interactive form elements, use something more specific like components/form/atoms/Input.
 */
export type BlockProps = HTMLAttributes<HTMLDivElement> &
  (ReactFCProps &
    (StyleProps & {
      /**
       * Support for svg element
       */
      viewBox?: string;
    }));

/**
 * Renders inline elements like <span> (default), <b>, <i>, etc. But also renders any HTML tag as an inline DOM element!
 */
export const Component: FC<BlockProps> = forwardRef(
  ({ as = 'div', ...props }, refFromParent) => {
    const TagName = `${as}` as any;
    return <TagName {...props} ref={refFromParent} />;
  }
);

/**
 * "Component" export is only for Storybook Stories. Because SB docgen doesn't work when wrapped in HOC.
 */
const WrappedInHOC = memo(withStyles(Component, 'Block', variants));

/**
 * This is an HOC, like Styled in @emotion/styled or Styled-Components, to help with styling, and managing props.
 * First you must call it with an object of props which will be used by all instances.
 * Then, you can use the returned value as a normal component. Pass to it props that only the specific instance will use.
 */
export const ssBlock = (props1: BlockProps) => (props2: BlockProps) => {
  const props = objects_add_values(props1, props2, ';', ['children']);
  return <WrappedInHOC {...props} children={props2.children} />;
};

/**
 * Default export wrapped in useful HOC. Ready to use in your JSX. Usage: <Block {...yourProps} />
 */
export default WrappedInHOC;
