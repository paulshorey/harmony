// type colorGroupType = string; // tsFix - possible to be more specific?
// type colorShadeType = string; // tsFix - possible to be more specific?

import { styledTags as styledTagsImport } from './html';

// tsFix - need definitive type of any kind of EmotionJS css prop type - SerializedStyles, Interpolation
// export type styleProp = any | Array<any | ((...args: any) => any)> | ((...args: any) => any);
// import { CSSInterpolation } from "@emotion/serialize";
// CSSInterpolation | EmotionCssFunction | any | Array<any | EmotionCssFunction | CSSInterpolation>;
// import { SerializedStyles } from '@emotion/serialize';
// type styledTags = keyof JSX.IntrinsicElements | React.ComponentType<any>;
export type styledTags = styledTagsImport;

// custom "styled strings" type for this library - should accept @emotion/styled too
export type styleProp =
  | string
  | ((props) => string)
  | Array<string | ((props) => string)>;

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
   * Refers to [data-textcolor] groups you defined in your global css file. Import: @ps/ui/styles/global/variables.css
   */
  textgradient?: 'light' | 'dark' | 'purple' | 'accent' | 'cta' | 'rainbow';
  /**
   * One or multiple variants as a string, separated by spaces. Will be used in addition to variants. Sometimes it may be helpful to pass an array of varints (programmatically) and then pass a string (for just one instance).
   */
  variant?: string;
  /**
   * Styled string. Or a function that accepts theme and returns a string. Or array of either. Same as other ssXxx props below, but without any media queries or conditional logic.
   */
  ss?: styleProp;
  /**
   * `@media (min-width: 931px)` - Does not target any specific device. Mostly desktop, some tablets. 931px is an arbitrary number. It's just the minimum width where desktop designs look good. Below this it's very hard to fit all the desktop content. Same as `theme.mq.lg`.
   */
  ssLg?: styleProp;
  /**
   * `@media (max-width: 930px)` - Does not target any specific device. Some desktop, some tablets, but mostly phones. This complements ssLg. Same as `theme.mq.sm`.
   */
  ssSm?: styleProp;
  /**
   * `@media (min-width: 1025px)` - Desktop, Laptop, iPad 12in Landscape. Use in conjunction with ssMobile which is <= 1024px. Same as `theme.mq.desktop`.
   */
  ssDesktop?: styleProp;
  /**
   * `@media (max-width: 1024px)` - Mobile, Tablet, iPad 12in Portrait, iPad 9in in any orientation. Use in conjunction with ssDesktop which is >= 1025px. Same as `theme.mq.mobile`.
   */
  ssMobile?: styleProp;
  /**
   * phones only, not tablets ( <= 499px wide ) Same as `theme.mq.phone`.
   */
  ssPhone?: styleProp;
  /**
   * extra narrow devices like iPhone 8/X/SE ( <= 399px wide ) Same as `theme.mq.smallPhone`.
   */
  ssSmallPhone?: styleProp;
  /**
   * includes iPad-12 portrait and iPad-9 landscape or portrait ( >= 737px wide, <= 1024px wide ) Same as `theme.mq.tablet`.
   */
  ssTablet?: styleProp;
  /**
   * the very awkward size where we no longer support the mobile design, but it feels big enough to maybe be desktop ( >= 931px wide, <= 1024px wide ) Same as `theme.mq.largeTablet`.
   */
  ssLargeTablet?: styleProp;
  /**
   * everything >= 500px wide. Same as `theme.mq.notPhone`.
   */
  ssNotPhone?: styleProp;
  /**
   * <= 359px wide.  Same as `theme.mq.tinyPhone`.
   */
  ssTinyPhone?: styleProp;
  /**
   * \>= 1440px wide. Same as `theme.mq.largeDesktop`.
   */
  ssLargeDesktop?: styleProp;
  /**
   * \>= 1920px wide. Same as `theme.mq.veryLargeDesktop`.
   */
  ssVeryLargeDesktop?: styleProp;
  /**
   * Portrait orientation (height > width). Same as `theme.mq.portrait`.
   */
  ssPortrait?: styleProp;
  /**
   * Landscape orientation (width > height). Same as `theme.mq.landscape`.
   */
  ssLandscape?: styleProp;
  /**
   * Rendered inside iframe. Does not have a `theme.mq` equivalent. This is implemented using JavaScript, not media queries.
   */
  ssIframe?: styleProp;
  /**
   * Not in an iframe. Does not have a `theme.mq` equivalent. This is implemented using JavaScript, not media queries.
   */
  ssNotIframe?: styleProp;
  /**
   * In an app WebView. Does not have a `theme.mq` equivalent. This is implemented using JavaScript, not media queries.
   */
  ssWebview?: styleProp;
  /**
   * Not in WebView. Does not have a `theme.mq` equivalent. This is implemented using JavaScript, not media queries.
   */
  ssNotWebview?: styleProp;
  /**
   * OS == 'Mac'. Does not have a `theme.mq` equivalent. This is implemented using JavaScript, not media queries.
   */
  ssMac?: styleProp;
  /**
   * OS == 'Windows'. Does not have a `theme.mq` equivalent. This is implemented using JavaScript, not media queries.
   */
  ssWindows?: styleProp;
  /**
   * OS == 'Linux'. Does not have a `theme.mq` equivalent. This is implemented using JavaScript, not media queries.
   */
  ssLinux?: styleProp;
  /**
   * OS == 'Android'. Does not have a `theme.mq` equivalent. This is implemented using JavaScript, not media queries.
   */
  ssAndroid?: styleProp;
  /**
   * OS == 'iOS'. Does not have a `theme.mq` equivalent. This is implemented using JavaScript, not media queries.
   */
  ssIOS?: styleProp;
  /**
   * device is 'iPhone'. Does not have a `theme.mq` equivalent. This is implemented using JavaScript, not media queries.
   */
  ssIPhone?: styleProp;
  /**
   * device is 'iPad'. Does not have a `theme.mq` equivalent. This is implemented using JavaScript, not media queries.
   */
  ssIPad?: styleProp;
  /**
   * applies to all sizes and devices, like ss, but this is wrapped inside a media query, to force-add specificity. Same as `theme.mq.all`.
   */
  ssAll?: styleProp;
  /**
   * One or multiple variants as a string[].
   */
  variants?: Array<string>;
  // /**
  //  * Will be used internally, to keep track of variants. Will be rendered on the HTML element as data-variant so you can debug, see which variants were applied to the element.
  //  */
  // 'data-variants'?: string;
};

export type ssComponentPropsType = styleProps;

export default ssComponentPropsType;
