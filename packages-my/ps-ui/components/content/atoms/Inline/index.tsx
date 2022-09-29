import { ReactFCProps, StyleProps } from '@ps/ui/types/component';
import withStyles from 'hooks/withStyles';
import { FC, forwardRef, HTMLAttributes, memo } from 'react';

import styles from './styles';
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
const Inline: FC<InlineProps> = forwardRef(
  ({ as = 'span', ...props }, refFromParent) => {
    const TagName = `${as}` as any;
    return <TagName {...props} ref={refFromParent} />;
  }
);

export default memo(withStyles(Inline, 'Inline', styles));
