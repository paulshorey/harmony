import withStyles from 'styles/withStyles';
import { FC, forwardRef, HTMLAttributes, memo } from 'react';

import objects_add_values from '@ps/fn/io/objects/objects_add_values';
import variants from './variants';
import ComponentPropsType from '@ps/ui/types/component';
/**
 * This is to render simple non-interactive read-only elements like span/div/p/h1/sup/a/center.
 * For interactive form elements, use something more specific like components/form/atoms/Input.
 */
export type InlineProps = HTMLAttributes<HTMLSpanElement> &
  (ComponentPropsType & {
    /**
     * Support for svg element
     */
    viewBox?: string;
  });

/**
 * This named Component is only for index.storybook.tsx. Storybook will read Types from it.
 * It can not read types if the component is wrapped in an HOC, like this default export.
 * It will also read THIS description. So instead, write the description in ./_story.md
 */
export const InlineUnstyled: FC<InlineProps> = forwardRef(
  ({ as = 'span', ...props }, refFromParent) => {
    const TagName = `${as}` as any;
    return <TagName {...props} ref={refFromParent} />;
  }
);
const InlineReadyToUse = memo(withStyles(InlineUnstyled, 'Inline', variants));

/**
 * This is an HOC, like Styled in @emotion/styled or Styled-Components, to help with styling, and managing props.
 * First you must call it with an object of props which will be used by all instances.
 * Then, you can use the returned value as a normal component. Pass to it props that only the specific instance will use.
 */
export const InlineHOC = (props1: InlineProps) => (props2: InlineProps) => {
  const props = objects_add_values(props1, props2, ';', ['children']);
  return <InlineReadyToUse {...props} children={props2.children} />;
};

/**
 * Default export wrapped in useful HOC. Ready to use in your JSX. Usage: <Inline {...yourProps} />
 */
export default InlineReadyToUse;
