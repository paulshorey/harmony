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
   * React ref to pass to the rendered element, using React.forwardRef.
   */
  ref?: any;
};

export type CustomCSSProps = {
  /**
   * Render one or multiple variants. Pass as array to variants, or space separated string to variant.
   */
  variants?: Array<string>;
  variant?: string;
  /**
   * This will be applied outside of any media queries. Standard EmotionJS.
   * The other css props (mqLg, mqSm, mqPhone) accept string type. This does not.
   */
  css?: EmotionCSSType;
  /**
   * `@media (min-width: 931px)` - Does not target any specific device. Mostly desktop, some tablets. 931px is an arbitrary number. It's just the minimum width where desktop designs look good. Below this, it's very hard to fit all the desktop content.
   */
  mqLg?: EmotionCSSType | string;
  /**
   * `@media (max-width: 930px)` - Does not target any specific device. Some desktop, some tablets, but mostly phones. This complements mqLg.
   */
  mqSm?: EmotionCSSType | string;

  /**
   * `@media (min-width: 1025px)` - Desktop, Laptop, iPad 12in Landscape. Use in conjunction with mqMobile which is <= 1024px.
   */
  mqDesktop?: EmotionCSSType | string;
  /**
   * `@media (max-width: 1024px)` - Mobile, Tablet, iPad 12in Portrait, iPad 9in in any orientation. Use in conjunction with mqDesktop which is >= 1025px.
   */
  mqMobile?: EmotionCSSType | string;
  /**
   * phones only, not tablets ( <= 499px wide )
   */
  mqPhone?: EmotionCSSType | string;
  /**
   * extra narrow devices like iPhone 8/X/SE ( <= 399px wide )
   */
  mqSmallPhone?: EmotionCSSType | string;
  /**
   * includes iPad-12 portrait and iPad-9 landscape or portrait ( >= 737px wide, <= 1024px wide )
   */
  mqTablet?: EmotionCSSType | string;
  /**
   * the very awkward size where we no longer support the mobile design, but it feels big enough to maybe be desktop ( >= 931px wide, <= 1024px wide )
   */
  mqLargeTablet?: EmotionCSSType | string;
  /**
   * everything >= 500px wide
   */
  mqNotPhone?: EmotionCSSType | string;
  /**
   * <= 359px wide
   */
  mqTinyPhone?: EmotionCSSType | string;
  /**
   * \>= 1440px wide
   */
  mqLargeDesktop?: EmotionCSSType | string;
  /**
   * \>= 1920px wide
   */
  mqVeryLargeDesktop?: EmotionCSSType | string;
  /**
   * Portrait orientation (height > width)
   */
  mqPortrait?: EmotionCSSType | string;
  /**
   * Landscape orientation (width > height)
   */
  mqLandscape?: EmotionCSSType | string;
  /**
   * Rendered inside iframe
   */
  mqIframe?: EmotionCSSType | string;
  /**
   * Not in an iframe
   */
  mqNotIframe?: EmotionCSSType | string;
  /**
   * In an app WebView
   */
  mqWebview?: EmotionCSSType | string;
  /**
   * Not in WebView
   */
  mqNotWebview?: EmotionCSSType | string;
  /**
   * OS == 'Mac'
   */
  mqMac?: EmotionCSSType | string;
  /**
   * OS == 'Windows'
   */
  mqWindows?: EmotionCSSType | string;
  /**
   * OS == 'Linux'
   */
  mqLinux?: EmotionCSSType | string;
  /**
   * OS == 'Android'
   */
  mqAndroid?: EmotionCSSType | string;
  /**
   * OS == 'iOS'
   */
  mqIOS?: EmotionCSSType | string;
  /**
   * device is 'iPhone'
   */
  mqIPhone?: EmotionCSSType | string;
  /**
   * device is 'iPad'
   */
  mqIPad?: EmotionCSSType | string;
};
