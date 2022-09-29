import styles from '@ps/ui/components/content/atoms/Inline/styles';
import { ReactFCProps, StyleProps } from '@ps/ui/types/component';
import withStyles from 'hooks/withStyles';
import { FC, forwardRef, HTMLAttributes, memo } from 'react';
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
 * This is an alternative to styled-system (which is not good for apps/sites that uses a lot of css).
 * Styled-system only supports a subset of CSS, and it pollutes the props namespace, making it difficult to see which props are for styling and which are for logic.
 */
const Block: FC<BlockProps> = forwardRef(({ as = 'div', ...props }, ref) => {
  const TagName = `${as}` as any;
  return <TagName {...props} ref={ref} />;
});

export default memo(withStyles(Block, 'Block', styles));
