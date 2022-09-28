import { SerializedStyles } from '@emotion/react';

export type HtmlContainerTags =
  | 'p'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'span'
  | 'div'
  | 'strong'
  | 'em'
  | 'small'
  | 's'
  | 'del'
  | 'ins'
  | 'sub'
  | 'sup'
  | 'b'
  | 'i'
  | 'u'
  | 'code'
  | 'pre'
  | 'blockquote'
  | 'cite'
  | 'ul'
  | 'ol'
  | 'li'
  | 'dl'
  | 'dt'
  | 'dd'
  | 'table'
  | 'caption'
  | 'thead'
  | 'tbody'
  | 'tfoot'
  | 'tr'
  | 'th'
  | 'td'
  | 'figure'
  | 'figcaption'
  | 'address'
  | 'hr'
  | 'br'
  | 'param'
  | 'audio'
  | 'source'
  | 'track'
  | 'area'
  | 'svg'
  | 'optgroup'
  | 'button'
  | 'label'
  | 'fieldset'
  | 'legend';

export type EmotionCSSType = (() => any) | Record<any, any> | SerializedStyles;

export type VariantsCSSType = {
  /**
   * Render one or multiple variants. Array of strings.
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
   * `@media (min-width: 931px)` - Does not target any specific device. Mostly desktop, some tablets. 931px is an arbitrary number. It's just the minimum width where desktop designs look good. Below this, it's very hard to fit all the desktop content. Same as `vars.mq.lg`.
   */
  mqLg?: EmotionCSSType | string;
  /**
   * `@media (max-width: 930px)` - Does not target any specific device. Some desktop, some tablets, but mostly phones. This complements mqLg. Same as `vars.mq.sm`.
   */
  mqSm?: EmotionCSSType | string;

  /**
   * `@media (min-width: 1025px)` - Desktop, Laptop, iPad 12in Landscape. Use in conjunction with mqMobile which is <= 1024px. Same as `vars.mq.desktop`.
   */
  mqDesktop?: EmotionCSSType | string;
  /**
   * `@media (max-width: 1024px)` - Mobile, Tablet, iPad 12in Portrait, iPad 9in in any orientation. Use in conjunction with mqDesktop which is >= 1025px. Same as `vars.mq.mobile`.
   */
  mqMobile?: EmotionCSSType | string;
  /**
   * phones only, not tablets ( <= 499px wide ) Same as `vars.mq.phone`.
   */
  mqPhone?: EmotionCSSType | string;
  /**
   * extra narrow devices like iPhone 8/X/SE ( <= 399px wide ) Same as `vars.mq.smallPhone`.
   */
  mqSmallPhone?: EmotionCSSType | string;
  /**
   * includes iPad-12 portrait and iPad-9 landscape or portrait ( >= 737px wide, <= 1024px wide ) Same as `vars.mq.tablet`.
   */
  mqTablet?: EmotionCSSType | string;
  /**
   * the very awkward size where we no longer support the mobile design, but it feels big enough to maybe be desktop ( >= 931px wide, <= 1024px wide ) Same as `vars.mq.largeTablet`.
   */
  mqLargeTablet?: EmotionCSSType | string;
  /**
   * everything >= 500px wide. Same as `vars.mq.notPhone`.
   */
  mqNotPhone?: EmotionCSSType | string;
  /**
   * <= 359px wide.  Same as `vars.mq.tinyPhone`.
   */
  mqTinyPhone?: EmotionCSSType | string;
  /**
   * \>= 1440px wide. Same as `vars.mq.largeDesktop`.
   */
  mqLargeDesktop?: EmotionCSSType | string;
  /**
   * \>= 1920px wide. Same as `vars.mq.veryLargeDesktop`.
   */
  mqVeryLargeDesktop?: EmotionCSSType | string;
  /**
   * Portrait orientation (height > width). Same as `vars.mq.portrait`.
   */
  mqPortrait?: EmotionCSSType | string;
  /**
   * Landscape orientation (width > height). Same as `vars.mq.landscape`.
   */
  mqLandscape?: EmotionCSSType | string;
  /**
   * Rendered inside iframe. Does not have a `vars.mq` equivalent. This is implemented using JavaScript, not media queries.
   */
  mqIframe?: EmotionCSSType | string;
  /**
   * Not in an iframe. Does not have a `vars.mq` equivalent. This is implemented using JavaScript, not media queries.
   */
  mqNotIframe?: EmotionCSSType | string;
  /**
   * In an app WebView. Does not have a `vars.mq` equivalent. This is implemented using JavaScript, not media queries.
   */
  mqWebview?: EmotionCSSType | string;
  /**
   * Not in WebView. Does not have a `vars.mq` equivalent. This is implemented using JavaScript, not media queries.
   */
  mqNotWebview?: EmotionCSSType | string;
  /**
   * OS == 'Mac'. Does not have a `vars.mq` equivalent. This is implemented using JavaScript, not media queries.
   */
  mqMac?: EmotionCSSType | string;
  /**
   * OS == 'Windows'. Does not have a `vars.mq` equivalent. This is implemented using JavaScript, not media queries.
   */
  mqWindows?: EmotionCSSType | string;
  /**
   * OS == 'Linux'. Does not have a `vars.mq` equivalent. This is implemented using JavaScript, not media queries.
   */
  mqLinux?: EmotionCSSType | string;
  /**
   * OS == 'Android'. Does not have a `vars.mq` equivalent. This is implemented using JavaScript, not media queries.
   */
  mqAndroid?: EmotionCSSType | string;
  /**
   * OS == 'iOS'. Does not have a `vars.mq` equivalent. This is implemented using JavaScript, not media queries.
   */
  mqIOS?: EmotionCSSType | string;
  /**
   * device is 'iPhone'. Does not have a `vars.mq` equivalent. This is implemented using JavaScript, not media queries.
   */
  mqIPhone?: EmotionCSSType | string;
  /**
   * device is 'iPad'. Does not have a `vars.mq` equivalent. This is implemented using JavaScript, not media queries.
   */
  mqIPad?: EmotionCSSType | string;
};
