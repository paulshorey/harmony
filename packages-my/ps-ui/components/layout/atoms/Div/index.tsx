import { HTMLAttributes, forwardRef, FC, memo } from 'react';
import { css } from '@emotion/react';
import vars from '@ps/ui/styles/vars';
import emotionToString from '@ps/fn/browser/style/emotion_to_string';

/**
 * This is to render simple non-interactive read-only elements like span/div/p/h1/sup/a/center.
 * For interactive form elements, use something more specific like components/form/atoms/Input.
 */
type DivProps = HTMLAttributes<HTMLDivElement> & {
  /**
   * HTML element tag name to render. Defaults to 'div'.
   */
  as?: string;
  /**
   * React ref to pass to the rendered element.
   */
  ref?: any;
  /**
   * Can be any EmotionJS css`` type. Can NOT accept string type. Wrap your string in css`` or css(``).
   * This will be applied outside of any media queries. Standard EmotionJS usage.
   * The other variants of css (cssLg, cssSm, cssPhone) additionally accept string type for convenience.
   * Those will be used inside of specialized media queries.
   */
  css?: Function | Record<any, any>;
  /**
   * >= 931px wide (use in conjunction with cssSm which is <= 930px wide)
   */
  cssLg?: Function | Record<any, any> | string;
  /**
   * <= 930px wide (use in conjunction with cssLg which is >= 931px wide)
   * Includes phones and a few small Android tablets.
   */
  cssSm?: Function | Record<any, any> | string;

  /**
   * >= 1025px wide (use in conjunction with cssMobile which is <= 1024px wide)
   * Includes iPad-12 landscape, EXcludes iPad-12 portrait and smaller.
   */
  cssDesktop?: Function | Record<any, any> | string;
  /**
   * <= 1024px wide (use in conjunction with cssDesktop, which is >= 1025px wide)
   */
  cssMobile?: Function | Record<any, any> | string;
  /**
   * phones only, not tablets ( <= 500px wide )
   */
  cssPhone?: Function | Record<any, any> | string;
  /**
   * extra narrow devices like iPhone 8/X/SE ( <= 400px wide )
   */
  cssSmallPhone?: Function | Record<any, any> | string;
  /**
   * larger phones like iPhone Max ( >=401px wide )
   */
  cssLargePhone?: Function | Record<any, any> | string;
  /**
   * includes iPad-12 portrait and iPad-9 landscape or portrait ( >= 737px wide, <= 1024px wide )
   */
  cssTablet?: Function | Record<any, any> | string;
  /**
   * the very awkward size where we no longer support the mobile design, but it feels big enough to maybe be desktop ( >= 931px wide, <= 1024px wide )
   */
  cssLargeTablet?: Function | Record<any, any> | string;
  /**
   * everything >= 501px wide
   */
  cssNotPhone?: Function | Record<any, any> | string;
};

/**
 * This is an alternative to styled-system (which is not good for apps/sites that uses a lot of css). Styled-system only supports a subset of CSS, and it pollutes the props namespace, making it difficult to see which props are for styling and which are for logic.
 */
const Div: FC<DivProps> = forwardRef(
  (
    {
      as = 'div',
      cssSmallPhone = '',
      cssPhone = '',
      cssNotPhone = '',
      cssSm = '',
      cssLg = '',
      cssTablet = '',
      cssLargeTablet = '',
      cssMobile = '',
      cssDesktop = '',
      className = '',
      ref, // ignored, instead caught by React.forwardRef and forwarded to 2nd argument refFromParent
      ...props
    },
    refFromParent
  ) => {
    const TagName = `${as}` as any; // Convert string to DOM element. Ex: "p" will become <p> element.
    return (
      <TagName
        ref={refFromParent}
        className={`Div ${className ? ' ' + className : ''}`} // className "Div" refers to this dir name, not tag name
        {...props}
        css={css`
          /* Must wrap the custom styles in &.Div {} to make specificity more important than default props.css. */
          &.Div {
            ${vars.mq.lg} {
              ${emotionToString(cssLg)}
            }
            ${vars.mq.sm} {
              ${emotionToString(cssSm)}
            }

            ${vars.mq.desktop} {
              ${emotionToString(cssDesktop)}
            }
            ${vars.mq.mobile} {
              ${emotionToString(cssMobile)}
            }
            ${vars.mq.tablet} {
              ${emotionToString(cssTablet)}
            }
            ${vars.mq.largeTablet} {
              ${emotionToString(cssLargeTablet)}
            }

            ${vars.mq.notPhone} {
              ${emotionToString(cssNotPhone)}
            }
            ${vars.mq.phone} {
              ${emotionToString(cssPhone)}
            }
            ${vars.mq.smallPhone} {
              ${emotionToString(cssSmallPhone)}
            }
          }
        `}
      />
    );
  }
);

export default Div;
