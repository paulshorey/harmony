import { ReactFCProps, StyleProps } from '@ps/ui/types/component';
import withStyles from 'hooks/withStyles';
import { FC, forwardRef, HTMLAttributes, memo } from 'react';

import styles from './styles';
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
 * Block component. Renders <div> by default. All HTMLDivElement props are supported.
 */
const Component: FC<BlockProps> = memo(
  withStyles(
    forwardRef(({ as = 'div', ...props }, ref) => {
      const TagName = `${as}` as any;
      return <TagName {...props} ref={ref} />;
    }),
    'Block',
    styles
  )
);

/**
 * Default export is ready to use in your JSX. Like <Block {...yourProps} />
 */
export default Component;

/**
 * Named export is a HOC, like Styled in @emotion/styled or Styled-Components.
 * First you must call it with an object of props which will be used by all instances.
 * Then, you can use the returned value as a normal component. Pass to it props that only the specific instance will use.
 */
export const Block = (props1: BlockProps) => (props2: BlockProps) => {
  return <Component {...props1} {...props2} />;
};
