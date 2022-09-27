import { SerializedStyles } from '@emotion/react';

export type EmotionCSSType = (() => any) | Record<any, any> | SerializedStyles;

export type VariantsCSSType = {
  /**
   * Render one or multiple variants. Pass as array to variants, or space separated string to variant.
   */
  variants?: Array<string>;
  variant?: string;
};

export type ReactElementProps = {
  /**
   * This will be applied outside of any media queries. Standard EmotionJS.
   * The other css props (cssLg, cssSm, cssPhone) accept string type. This does not.
   */
  css?: EmotionCSSType;
  /**
   * React ref to pass to the rendered element, using React.forwardRef.
   */
  ref?: any;
};

export type CustomCSSProps = {
  /**
   * HTML element tag to render instead of the component's default. Same as styled-system.
   */
  as?: string;
  /**
   * `@media (min-width: 931px)` - Does not target any specific device. Mostly desktop, some tablets. 931px is an arbitrary number. It's just the minimum width where desktop designs look good. Below this, it's very hard to fit all the desktop content.
   */
  cssLg?: EmotionCSSType | string;
  /**
   * `@media (max-width: 930px)` - Does not target any specific device. Some desktop, some tablets, but mostly phones. This complements cssLg.
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
   * phones only, not tablets ( <= 499px wide )
   */
  cssPhone?: EmotionCSSType | string;
  /**
   * extra narrow devices like iPhone 8/X/SE ( <= 399px wide )
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
   * everything >= 500px wide
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
  /**
   * Rendered inside iframe
   */
  cssIframe?: EmotionCSSType | string;
  /**
   * Not in an iframe
   */
  cssNotIframe?: EmotionCSSType | string;
  /**
   * In an app WebView
   */
  cssWebview?: EmotionCSSType | string;
  /**
   * Not in WebView
   */
  cssNotWebview?: EmotionCSSType | string;
  /**
   * OS == 'Mac'
   */
  cssMac?: EmotionCSSType | string;
  /**
   * OS == 'Windows'
   */
  cssWindows?: EmotionCSSType | string;
  /**
   * OS == 'Linux'
   */
  cssLinux?: EmotionCSSType | string;
  /**
   * OS == 'Android'
   */
  cssAndroid?: EmotionCSSType | string;
  /**
   * OS == 'iOS'
   */
  cssIOS?: EmotionCSSType | string;
  /**
   * device is 'iPhone'
   */
  cssIPhone?: EmotionCSSType | string;
  /**
   * device is 'iPad'
   */
  cssIPad?: EmotionCSSType | string;
};
