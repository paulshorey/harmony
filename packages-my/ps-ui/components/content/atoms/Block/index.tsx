import useCustomCSSFromProps from '@ps/ui/hooks/useCustomCSSFromProps';
import {
  CustomCSSProps,
  HtmlContainerTags,
  ReactFCProps,
} from '@ps/ui/types/component';
import { FC, forwardRef, HTMLAttributes, memo } from 'react';
/**
 * This is to render simple non-interactive read-only elements like span/div/p/h1/sup/a/center.
 * For interactive form elements, use something more specific like components/form/atoms/Input.
 */
export type BlockProps = HTMLAttributes<HTMLDivElement> &
  (ReactFCProps &
    (CustomCSSProps & {
      /**
       * HTML element tag to render instead of the default "div"
       */
      as?: HtmlContainerTags;
      /**
       * Support for svg element
       */
      viewBox?: string;
    }));

/**
 * This is an alternative to styled-system (which is not good for apps/sites that uses a lot of css).
 * Styled-system only supports a subset of CSS, and it pollutes the props namespace, making it difficult to see which props are for styling and which are for logic.
 */
const Block: FC<BlockProps> = forwardRef(
  ({ as = 'div', children, className = '', ...props }, refFromParent) => {
    const TagName = `${as}` as any;
    const { cssFromProps, otherProps } = useCustomCSSFromProps(props);
    return (
      <TagName
        {...otherProps}
        ref={refFromParent}
        className={`Block ${className ? ' ' + className : ''}`} // className "Block" refers to this dir name, not tag name
        css={cssFromProps}
      >
        {children}
      </TagName>
    );
  }
);

export default memo(Block);
