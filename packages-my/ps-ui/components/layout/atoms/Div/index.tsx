import { CustomCSSProps, ReactElementProps } from '@ps/ui/components/types';
import useCustomCSSFromProps from '@ps/ui/hooks/useCustomCSSFromProps';
import { FC, forwardRef, HTMLAttributes, memo } from 'react';
/**
 * This is to render simple non-interactive read-only elements like span/div/p/h1/sup/a/center.
 * For interactive form elements, use something more specific like components/form/atoms/Input.
 */
export type DivProps = HTMLAttributes<HTMLDivElement> &
  (ReactElementProps & CustomCSSProps);

/**
 * This is an alternative to styled-system (which is not good for apps/sites that uses a lot of css).
 * Styled-system only supports a subset of CSS, and it pollutes the props namespace, making it difficult to see which props are for styling and which are for logic.
 */
const Div: FC<DivProps> = forwardRef(
  ({ as = 'div', children, className = '', ...props }, refFromParent) => {
    // Convert string to DOM element. Ex: "p" will become <p> element.
    const TagName = `${as}` as any;
    // Up to developer to make sure {...HTMLAttributes} are valid. Webpack will print console warning if not.
    // See also https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes
    const { otherProps: HTMLAttributes, outputCSS } =
      useCustomCSSFromProps(props);
    return (
      <TagName
        {...HTMLAttributes}
        ref={refFromParent}
        className={`Div ${className ? ' ' + className : ''}`} // className "Div" refers to this dir name, not tag name
        css={outputCSS}
      >
        {children}
      </TagName>
    );
  }
);

export default memo(Div);
