import { ReactFCProps, StyleProps } from '@ps/ui/types/component';
import withStyles from 'styles/withStyles';
import { FC, forwardRef, HTMLAttributes, memo } from 'react';

import variants from './variants';
import objects_add_values from '@ps/fn/io/objects/objects_add_values';
/**
 * This is to render simple non-interactive read-only elements like Inline/Span/p/h1/sup/a/center.
 * For interactive form elements, use something more specific like components/form/atoms/Input.
 */
export type InlineProps = HTMLAttributes<HTMLSpanElement> &
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
export const Component: FC<InlineProps> = forwardRef(
  ({ as = 'span', ...props }, refFromParent) => {
    const TagName = `${as}` as any;
    return <TagName {...props} ref={refFromParent} />;
  }
);

/**
 * "Component" export is only for Storybook Stories. Because SB docgen doesn't work when wrapped in HOC.
 */
const WrappedInHOC = memo(withStyles(Component, 'Inline', variants));

/**
 * This is an HOC, like Styled in @emotion/styled or Styled-Components, to help with styling, and managing props.
 * First you must call it with an object of props which will be used by all instances.
 * Then, you can use the returned value as a normal component. Pass to it props that only the specific instance will use.
 */
export const ssInline = (props1: InlineProps) => (props2: InlineProps) => {
  const props = objects_add_values(props1, props2, ';', ['children']);
  return <WrappedInHOC {...props} children={props2.children} />;
};

/**
 * Default export wrapped in useful HOC. Ready to use in your JSX. Usage: <Inline {...yourProps} />
 */
export default WrappedInHOC;
