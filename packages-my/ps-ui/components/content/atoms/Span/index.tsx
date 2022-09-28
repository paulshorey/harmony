import { CustomCSSProps, ReactElementProps } from '@ps/ui/components/types';
import useCustomCSSFromProps from '@ps/ui/hooks/useCustomCSSFromProps';
import { FC, forwardRef, HTMLAttributes, memo } from 'react';
/**
 * This is to render simple non-interactive read-only elements like span/Span/p/h1/sup/a/center.
 * For interactive form elements, use something more specific like components/form/atoms/Input.
 */
export type SpanProps = HTMLAttributes<HTMLSpanElement> &
  (ReactElementProps &
    (CustomCSSProps & {
      /**
       * HTML element tag to render instead of the component's default
       */
      as?: string;
      /**
       * Support for svg element
       */
      viewBox?: string;
    }));

/**
 * This is an alternative to styled-system (which is not good for apps/sites that uses a lot of css).
 * Styled-system only supports a subset of CSS, and it pollutes the props namespace, making it difficult to see which props are for styling and which are for logic.
 */
const Span: FC<SpanProps> = forwardRef(
  ({ as = 'span', children, className = '', ...props }, refFromParent) => {
    const TagName = `${as}` as any;
    const { mqFromProps, otherProps } = useCustomCSSFromProps(props);
    return (
      <TagName
        {...otherProps}
        ref={refFromParent}
        className={`Span ${className ? ' ' + className : ''}`} // className "Span" refers to this dir name, not tag name
        css={mqFromProps}
      >
        {children}
      </TagName>
    );
  }
);

export default memo(Span);
