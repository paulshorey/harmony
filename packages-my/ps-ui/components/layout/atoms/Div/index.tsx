import { css, SerializedStyles } from '@emotion/react';
import emotionToString from '@ps/fn/browser/style/emotion_to_string';
import vars from '@ps/ui/styles/vars';
import { FC, forwardRef, HTMLAttributes, memo } from 'react';

type EmotionCSSType = (() => any) | Record<any, any> | SerializedStyles;

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
   * Can be any EmotionJS css\`\` type. asdfdf Can NOT accept string type. Wrap your string in css\`\`.
   * This will be applied outside of any media queries. Standard EmotionJS usage.
   * The other variants of css (cssLg, cssSm, cssPhone) additionally accept string type for convenience.
   * Those will be used inside of specialized media queries.
   */
  css?: EmotionCSSType;
  /**
   * `@media (min-width: 931px)` - Does not target any specific device. Mostly desktop, some tablets. This is simply the size where a desktop layout looks good.
   */
  cssLg?: EmotionCSSType | string;
  /**
   * `@media (max-width: 930px)` - Does not target any specific device. Some desktop, some tablets, but mostly phones. Below 931px wide, desktop layout (full header, left sidebar) does not look good.
   */
  cssSm?: EmotionCSSType | string;

  /**
   * `@media (min-width: 1025px)` - Desktop, Laptop, iPad 12in Landscape. Use in conjunction with cssMobile which is <= 1024px.
   */
  cssDesktop?: EmotionCSSType | string;
  /**
   * `@media (max-width: 1024px)` - Mobile, Tablet, iPad 12in Portrait, iPad 9in in any orientation. Use in conjunction with cssDesktop which is >= 1025px.
   */
  cssMobile?: EmotionCSSType | string;
  /**
   * phones only, not tablets ( <= 500px wide )
   */
  cssPhone?: EmotionCSSType | string;
  /**
   * extra narrow devices like iPhone 8/X/SE ( <= 400px wide )
   */
  cssSmallPhone?: EmotionCSSType | string;
  /**
   * includes iPad-12 portrait and iPad-9 landscape or portrait ( >= 737px wide, <= 1024px wide )
   */
  cssTablet?: EmotionCSSType | string;
  /**
   * the very awkward size where we no longer support the mobile design, but it feels big enough to maybe be desktop ( >= 931px wide, <= 1024px wide )
   */
  cssLargeTablet?: EmotionCSSType | string;
  /**
   * everything >= 501px wide
   */
  cssNotPhone?: EmotionCSSType | string;
  /**
   * <= 359px wide
   */
  cssTinyPhone?: EmotionCSSType | string;
  /**
   * \>= 1440px wide
   */
  cssLargeDesktop?: EmotionCSSType | string;
  /**
   * \>= 1920px wide
   */
  cssVeryLargeDesktop?: EmotionCSSType | string;
  /**
   * Portrait orientation (height > width)
   */
  cssPortrait?: EmotionCSSType | string;
  /**
   * Landscape orientation (width > height)
   */
  cssLandscape?: EmotionCSSType | string;
};

/**
 * This is an alternative to styled-system (which is not good for apps/sites that uses a lot of css).
 * Styled-system only supports a subset of CSS, and it pollutes the props namespace, making it difficult to see which props are for styling and which are for logic.
 */
const Div: FC<DivProps> = forwardRef(
  (
    {
      as = 'div',
      className = '',
      cssDesktop = '',
      cssLandscape = '',
      cssLargeDesktop = '',
      cssLargeTablet = '',
      cssLg = '',
      cssMobile = '',
      cssNotPhone = '',
      cssPhone = '',
      cssPortrait = '',
      cssSm = '',
      cssSmallPhone = '',
      cssTablet = '',
      cssTinyPhone = '',
      cssVeryLargeDesktop = '',
      // ref, // caught by React.forwardRef and forwarded to 2nd argument refFromParent
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
            ${cssLg &&
            `
            ${vars.mq.lg} {
              ${emotionToString(cssLg)}
            }
            `}
            ${cssSm &&
            `
            ${vars.mq.sm} {
              ${emotionToString(cssSm)}
            }
            `}
            ${cssDesktop &&
            `
            ${vars.mq.desktop} {
              ${emotionToString(cssDesktop)}
            }
            `}
            ${cssMobile &&
            `
            ${vars.mq.mobile} {
              ${emotionToString(cssMobile)}
            }
            `}
            ${cssTablet &&
            `
            ${vars.mq.tablet} {
              ${emotionToString(cssTablet)}
            }
            `}
            ${cssLargeTablet &&
            `
            ${vars.mq.largeTablet} {
              ${emotionToString(cssLargeTablet)}
            }
            `}
            ${cssNotPhone &&
            `
            ${vars.mq.notPhone} {
              ${emotionToString(cssNotPhone)}
            }
            `}
            ${cssPhone &&
            `
            ${vars.mq.phone} {
              ${emotionToString(cssPhone)}
            }
            `}
            ${cssSmallPhone &&
            `
            ${vars.mq.smallPhone} {
              ${emotionToString(cssSmallPhone)}
            }
            `}
            ${cssTinyPhone &&
            `
            ${vars.mq.tinyPhone} {
              ${emotionToString(cssTinyPhone)}
            }
            `}
            ${cssLargeDesktop &&
            `
            ${vars.mq.largeDesktop} {
              ${emotionToString(cssLargeDesktop)}
            }
            `}
            ${cssVeryLargeDesktop &&
            `
            ${vars.mq.veryLargeDesktop} {
              ${emotionToString(cssVeryLargeDesktop)}
            }
            `}
            ${cssPortrait &&
            `
            ${vars.mq.portrait} {
              ${emotionToString(cssPortrait)}
            }
            `}
            ${cssLandscape &&
            `
            ${vars.mq.landscape} {
              ${emotionToString(cssLandscape)}
            }
            `}
          }
        `}
      />
    );
  }
);

export default memo(Div);
