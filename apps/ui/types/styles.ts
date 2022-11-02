import { styledTags as styledTagsImport } from './html';

import { SerializedStyles } from '@emotion/serialize';

export type styledTags = styledTagsImport;

export type ssProp =
  | string
  | ((props) => string)
  | Array<string | ((props) => string)>
  | SerializedStyles
  | Array<SerializedStyles>
  | ((props) => SerializedStyles);

/**
 * Props used by this UI library
 */
export type styleProps = {
  /**
   * Refers to [data-bgcolor] groups you defined in your global css file. Import: @ps/ui/styles/global/variables.css
   */
  bgcolor?: 'light' | 'dark' | 'purple' | 'accent' | 'cta';
  /**
   * Refers to [data-textcolor] groups you defined in your global css file. Import: @ps/ui/styles/global/variables.css
   */
  textcolor?: 'light' | 'dark' | 'purple' | 'accent' | 'cta';
  /**
   * Refers to [data-bgcolor] groups you defined in your global css file. Import: @ps/ui/styles/global/variables.css
   */
  bggradient?: 'light' | 'dark' | 'purple' | 'accent' | 'cta' | 'rainbow';
  /**
   * Refers to [data-textcolor] groups you defined in your global css file. Import: @ps/ui/styles/global/variables.css - NOT RECOMMENDED for block-level elements or elements with children. Works best on simple inline text.
   */
  textgradient?: 'light' | 'dark' | 'purple' | 'accent' | 'cta' | 'rainbow';
  /**
   * One or multiple variants as a string, separated by spaces. Will be used in addition to variants. Sometimes it may be helpful to pass an array of varints (programmatically) and then pass a string (for just one instance).
   */
  variant?: string;
  /**
   * One or multiple variants as a string[].
   */
  variants?: Array<string>;
  /**
   * Styled string. Or a function that accepts theme and returns a string. Or array of either. Same as other ssXxx props below, but without any media queries or conditional logic.
   */
  ss?: ssProp;
  /**
   * `@media (min-width: 931px)` - Does not target any specific device. Mostly desktop, some tablets. 931px is an arbitrary number. It's just the minimum width where desktop designs look good. Below this it's very hard to fit all the desktop content. Same as `theme.mq.lg`.
   */
  ssLg?: ssProp;
  /**
   * `@media (max-width: 930px)` - Does not target any specific device. Some desktop, some tablets, but mostly phones. This complements ssLg. Same as `theme.mq.sm`.
   */
  ssSm?: ssProp;
  /**
   * `@media (min-width: 1025px)` - Desktop, Laptop, iPad 12in Landscape. Use in conjunction with ssMobile which is <= 1024px. Same as `theme.mq.desktop`.
   */
  ssDesktop?: ssProp;
  /**
   * `@media (max-width: 1024px)` - Mobile, Tablet, iPad 12in Portrait, iPad 9in in any orientation. Use in conjunction with ssDesktop which is >= 1025px. Same as `theme.mq.mobile`.
   */
  ssMobile?: ssProp;
  /**
   * phones only, not tablets ( <= 499px wide ) Same as `theme.mq.phone`.
   */
  ssPhone?: ssProp;
  /**
   * extra narrow devices like iPhone 8/X/SE ( <= 399px wide ) Same as `theme.mq.smallPhone`.
   */
  ssSmallPhone?: ssProp;
  /**
   * includes iPad-12 portrait and iPad-9 landscape or portrait ( >= 737px wide, <= 1024px wide ) Same as `theme.mq.tablet`.
   */
  ssTablet?: ssProp;
  /**
   * the very awkward size where we no longer support the mobile design, but it feels big enough to maybe be desktop ( >= 931px wide, <= 1024px wide ) Same as `theme.mq.largeTablet`.
   */
  ssLargeTablet?: ssProp;
  /**
   * everything >= 500px wide. Same as `theme.mq.notPhone`.
   */
  ssNotPhone?: ssProp;
  /**
   * <= 359px wide.  Same as `theme.mq.tinyPhone`.
   */
  ssTinyPhone?: ssProp;
  /**
   * \>= 1440px wide. Same as `theme.mq.largeDesktop`.
   */
  ssLargeDesktop?: ssProp;
  /**
   * \>= 1920px wide. Same as `theme.mq.veryLargeDesktop`.
   */
  ssVeryLargeDesktop?: ssProp;
  /**
   * Portrait orientation (height > width). Same as `theme.mq.portrait`.
   */
  ssPortrait?: ssProp;
  /**
   * Landscape orientation (width > height). Same as `theme.mq.landscape`.
   */
  ssLandscape?: ssProp;
  /**
   * Rendered inside iframe. Does not have a `theme.mq` equivalent. This is implemented using JavaScript, not media queries.
   */
  ssIframe?: ssProp;
  /**
   * Not in an iframe. Does not have a `theme.mq` equivalent. This is implemented using JavaScript, not media queries.
   */
  ssNotIframe?: ssProp;
  /**
   * In an app WebView. Does not have a `theme.mq` equivalent. This is implemented using JavaScript, not media queries.
   */
  ssWebview?: ssProp;
  /**
   * Not in WebView. Does not have a `theme.mq` equivalent. This is implemented using JavaScript, not media queries.
   */
  ssNotWebview?: ssProp;
  /**
   * OS == 'Mac'. Does not have a `theme.mq` equivalent. This is implemented using JavaScript, not media queries.
   */
  ssMac?: ssProp;
  /**
   * OS == 'Windows'. Does not have a `theme.mq` equivalent. This is implemented using JavaScript, not media queries.
   */
  ssWindows?: ssProp;
  /**
   * OS == 'Linux'. Does not have a `theme.mq` equivalent. This is implemented using JavaScript, not media queries.
   */
  ssLinux?: ssProp;
  /**
   * OS == 'Android'. Does not have a `theme.mq` equivalent. This is implemented using JavaScript, not media queries.
   */
  ssAndroid?: ssProp;
  /**
   * OS == 'iOS'. Does not have a `theme.mq` equivalent. This is implemented using JavaScript, not media queries.
   */
  ssIOS?: ssProp;
  /**
   * device is 'iPhone'. Does not have a `theme.mq` equivalent. This is implemented using JavaScript, not media queries.
   */
  ssIPhone?: ssProp;
  /**
   * device is 'iPad'. Does not have a `theme.mq` equivalent. This is implemented using JavaScript, not media queries.
   */
  ssIPad?: ssProp;
  /**
   * applies to all sizes and devices, like ss, but this is wrapped inside a media query, to force-add specificity. Same as `theme.mq.all`.
   */
  ssAll?: ssProp;
  // /**
  //  * Will be used internally, to keep track of variants. Will be rendered on the HTML element as data-variant so you can debug, see which variants were applied to the element.
  //  */
  // 'data-variants'?: string;
};
export default styleProps;
