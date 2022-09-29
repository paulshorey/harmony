import { SerializedStyles } from '@emotion/react';

import { HtmlContainerTags as HtmlContainerTagsImport } from './html';

export type HtmlContainerTags = HtmlContainerTagsImport;

export type EmotionCssPropType =
  | SerializedStyles
  | Array<SerializedStyles | ((...args: any) => any)>
  | ((...args: any) => any);

export type StylesFile = { default: EmotionCssPropType } & Record<
  string,
  EmotionCssPropType
>;

export type ReactFCProps = {
  /**
   * React ref to pass to the rendered element, using React.forwardRef.
   */
  ref?: any;
};

export type VariantProps = {
  /**
   * Render one or multiple variants. Array of strings.
   */
  variants?: Array<string>;
  variant?: string;
};

export type StyleProps = VariantProps & {
  /**
   * HTML element tag name to render. All other aspects of the component (all CSS) will be unchanged.
   */
  as?: HtmlContainerTags;
  /**
   * Style string. This is the only one that will NOT use any conditional logic or media queries.
   */
  ss?: string;
  /**
   * `@media (min-width: 931px)` - Does not target any specific device. Mostly desktop, some tablets. 931px is an arbitrary number. It's just the minimum width where desktop designs look good. Below this it's very hard to fit all the desktop content. Same as `theme.mq.lg`.
   */
  ssLg?: string;
  /**
   * `@media (max-width: 930px)` - Does not target any specific device. Some desktop, some tablets, but mostly phones. This complements ssLg. Same as `theme.mq.sm`.
   */
  ssSm?: string;
  /**
   * `@media (min-width: 1025px)` - Desktop, Laptop, iPad 12in Landscape. Use in conjunction with ssMobile which is <= 1024px. Same as `theme.mq.desktop`.
   */
  ssDesktop?: string;
  /**
   * `@media (max-width: 1024px)` - Mobile, Tablet, iPad 12in Portrait, iPad 9in in any orientation. Use in conjunction with ssDesktop which is >= 1025px. Same as `theme.mq.mobile`.
   */
  ssMobile?: string;
  /**
   * phones only, not tablets ( <= 499px wide ) Same as `theme.mq.phone`.
   */
  ssPhone?: string;
  /**
   * extra narrow devices like iPhone 8/X/SE ( <= 399px wide ) Same as `theme.mq.smallPhone`.
   */
  ssSmallPhone?: string;
  /**
   * includes iPad-12 portrait and iPad-9 landscape or portrait ( >= 737px wide, <= 1024px wide ) Same as `theme.mq.tablet`.
   */
  ssTablet?: string;
  /**
   * the very awkward size where we no longer support the mobile design, but it feels big enough to maybe be desktop ( >= 931px wide, <= 1024px wide ) Same as `theme.mq.largeTablet`.
   */
  ssLargeTablet?: string;
  /**
   * everything >= 500px wide. Same as `theme.mq.notPhone`.
   */
  ssNotPhone?: string;
  /**
   * <= 359px wide.  Same as `theme.mq.tinyPhone`.
   */
  ssTinyPhone?: string;
  /**
   * \>= 1440px wide. Same as `theme.mq.largeDesktop`.
   */
  ssLargeDesktop?: string;
  /**
   * \>= 1920px wide. Same as `theme.mq.veryLargeDesktop`.
   */
  ssVeryLargeDesktop?: string;
  /**
   * Portrait orientation (height > width). Same as `theme.mq.portrait`.
   */
  ssPortrait?: string;
  /**
   * Landscape orientation (width > height). Same as `theme.mq.landscape`.
   */
  ssLandscape?: string;
  /**
   * Rendered inside iframe. Does not have a `theme.mq` equivalent. This is implemented using JavaScript, not media queries.
   */
  ssIframe?: string;
  /**
   * Not in an iframe. Does not have a `theme.mq` equivalent. This is implemented using JavaScript, not media queries.
   */
  ssNotIframe?: string;
  /**
   * In an app WebView. Does not have a `theme.mq` equivalent. This is implemented using JavaScript, not media queries.
   */
  ssWebview?: string;
  /**
   * Not in WebView. Does not have a `theme.mq` equivalent. This is implemented using JavaScript, not media queries.
   */
  ssNotWebview?: string;
  /**
   * OS == 'Mac'. Does not have a `theme.mq` equivalent. This is implemented using JavaScript, not media queries.
   */
  ssMac?: string;
  /**
   * OS == 'Windows'. Does not have a `theme.mq` equivalent. This is implemented using JavaScript, not media queries.
   */
  ssWindows?: string;
  /**
   * OS == 'Linux'. Does not have a `theme.mq` equivalent. This is implemented using JavaScript, not media queries.
   */
  ssLinux?: string;
  /**
   * OS == 'Android'. Does not have a `theme.mq` equivalent. This is implemented using JavaScript, not media queries.
   */
  ssAndroid?: string;
  /**
   * OS == 'iOS'. Does not have a `theme.mq` equivalent. This is implemented using JavaScript, not media queries.
   */
  ssIOS?: string;
  /**
   * device is 'iPhone'. Does not have a `theme.mq` equivalent. This is implemented using JavaScript, not media queries.
   */
  ssIPhone?: string;
  /**
   * device is 'iPad'. Does not have a `theme.mq` equivalent. This is implemented using JavaScript, not media queries.
   */
  ssIPad?: string;
  /**
   * EmotionJS standard css prop. Unlike the custom ss props, this can not be a string.
   */
  css?: EmotionCssPropType;
  /**
   * Standard React JS object.
   */
  style?: Record<string, any>;
  /**
   * Used internally by this library to handle variants.
   */
  styles?: Record<string, EmotionCssPropType>;
};
