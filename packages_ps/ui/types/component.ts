type colorGroupType = string; // tsFix - possible to be more specific?
type colorShadeType = string; // tsFix - possible to be more specific?

import { styledTags as styledTagsImport } from './html';
// type styledTags = keyof JSX.IntrinsicElements | React.ComponentType<any>;
export type styledTags = styledTagsImport;

// tsFix - need definitive type of any kind of EmotionJS css prop type - SerializedStyles, Interpolation
// export type cssPropType = any | Array<any | ((...args: any) => any)> | ((...args: any) => any);
// import { CSSInterpolation } from "@emotion/serialize";
// CSSInterpolation | EmotionCssFunction | any | Array<any | EmotionCssFunction | CSSInterpolation>;

// custom "styled strings" type for this library - should accept @emotion/styled too
export type ssPropType =
  | string
  | ((...args: any) => string)
  | Array<string | ((...args: any) => string)>;

/**
 * Props used by this UI library
 */
export type ssProps = {
  /**
   * Render one or multiple as string[]. Local variants are specific to the component. Higher specificity. There are also global variants, which apply to all components. Part of the theme, in `styles/variants.ts`.
   */
  'variants'?: Array<string>;
  /**
   * Styled string. Or a function that accepts theme and returns a string. Or array of either. Same as other ssXxx props below, but without any media queries or conditional logic.
   */
  'ss'?: ssPropType;
  /**
   * `@media (min-width: 931px)` - Does not target any specific device. Mostly desktop, some tablets. 931px is an arbitrary number. It's just the minimum width where desktop designs look good. Below this it's very hard to fit all the desktop content. Same as `theme.mq.lg`.
   */
  'ssLg'?: ssPropType;
  /**
   * `@media (max-width: 930px)` - Does not target any specific device. Some desktop, some tablets, but mostly phones. This complements ssLg. Same as `theme.mq.sm`.
   */
  'ssSm'?: ssPropType;
  /**
   * `@media (min-width: 1025px)` - Desktop, Laptop, iPad 12in Landscape. Use in conjunction with ssMobile which is <= 1024px. Same as `theme.mq.desktop`.
   */
  'ssDesktop'?: ssPropType;
  /**
   * `@media (max-width: 1024px)` - Mobile, Tablet, iPad 12in Portrait, iPad 9in in any orientation. Use in conjunction with ssDesktop which is >= 1025px. Same as `theme.mq.mobile`.
   */
  'ssMobile'?: ssPropType;
  /**
   * phones only, not tablets ( <= 499px wide ) Same as `theme.mq.phone`.
   */
  'ssPhone'?: ssPropType;
  /**
   * extra narrow devices like iPhone 8/X/SE ( <= 399px wide ) Same as `theme.mq.smallPhone`.
   */
  'ssSmallPhone'?: ssPropType;
  /**
   * includes iPad-12 portrait and iPad-9 landscape or portrait ( >= 737px wide, <= 1024px wide ) Same as `theme.mq.tablet`.
   */
  'ssTablet'?: ssPropType;
  /**
   * the very awkward size where we no longer support the mobile design, but it feels big enough to maybe be desktop ( >= 931px wide, <= 1024px wide ) Same as `theme.mq.largeTablet`.
   */
  'ssLargeTablet'?: ssPropType;
  /**
   * everything >= 500px wide. Same as `theme.mq.notPhone`.
   */
  'ssNotPhone'?: ssPropType;
  /**
   * <= 359px wide.  Same as `theme.mq.tinyPhone`.
   */
  'ssTinyPhone'?: ssPropType;
  /**
   * \>= 1440px wide. Same as `theme.mq.largeDesktop`.
   */
  'ssLargeDesktop'?: ssPropType;
  /**
   * \>= 1920px wide. Same as `theme.mq.veryLargeDesktop`.
   */
  'ssVeryLargeDesktop'?: ssPropType;
  /**
   * Portrait orientation (height > width). Same as `theme.mq.portrait`.
   */
  'ssPortrait'?: ssPropType;
  /**
   * Landscape orientation (width > height). Same as `theme.mq.landscape`.
   */
  'ssLandscape'?: ssPropType;
  /**
   * Rendered inside iframe. Does not have a `theme.mq` equivalent. This is implemented using JavaScript, not media queries.
   */
  'ssIframe'?: ssPropType;
  /**
   * Not in an iframe. Does not have a `theme.mq` equivalent. This is implemented using JavaScript, not media queries.
   */
  'ssNotIframe'?: ssPropType;
  /**
   * In an app WebView. Does not have a `theme.mq` equivalent. This is implemented using JavaScript, not media queries.
   */
  'ssWebview'?: ssPropType;
  /**
   * Not in WebView. Does not have a `theme.mq` equivalent. This is implemented using JavaScript, not media queries.
   */
  'ssNotWebview'?: ssPropType;
  /**
   * OS == 'Mac'. Does not have a `theme.mq` equivalent. This is implemented using JavaScript, not media queries.
   */
  'ssMac'?: ssPropType;
  /**
   * OS == 'Windows'. Does not have a `theme.mq` equivalent. This is implemented using JavaScript, not media queries.
   */
  'ssWindows'?: ssPropType;
  /**
   * OS == 'Linux'. Does not have a `theme.mq` equivalent. This is implemented using JavaScript, not media queries.
   */
  'ssLinux'?: ssPropType;
  /**
   * OS == 'Android'. Does not have a `theme.mq` equivalent. This is implemented using JavaScript, not media queries.
   */
  'ssAndroid'?: ssPropType;
  /**
   * OS == 'iOS'. Does not have a `theme.mq` equivalent. This is implemented using JavaScript, not media queries.
   */
  'ssIOS'?: ssPropType;
  /**
   * device is 'iPhone'. Does not have a `theme.mq` equivalent. This is implemented using JavaScript, not media queries.
   */
  'ssIPhone'?: ssPropType;
  /**
   * device is 'iPad'. Does not have a `theme.mq` equivalent. This is implemented using JavaScript, not media queries.
   */
  'ssIPad'?: ssPropType;
  /**
   * applies to all sizes and devices, like ss, but this is wrapped inside a media query, to force-add specificity. Same as `theme.mq.all`.
   */
  'ssAll'?: ssPropType;
  // /**
  //  * Shorthand for props.variants['dark']. It can be undefined. The key will be read and added to props.variants.
  //  */
  // dark?: any;
  // /**
  //  * Shorthand for props.variants['default']. It can be undefined. The key will be read and added to props.variants.
  //  */
  // default?: any;
  /**
   * One or multiple variants as a string, separated by spaces. Will be used in addition to variants. Sometimes it may be helpful to pass an array of varints (programmatically) and then pass a string (for just one instance). Some components support layering multiple variants. Others may act unpredictably/buggy if you pass too many variants. So use sparingly.
   */
  'variant'?: string;
  /**
   * Will be used internally, to keep track of variants. Will be rendered on the HTML element as data-variant so you can debug, see which variants were applied to the element.
   */
  'data-variants'?: string;
  /**
   * (This needs to be a Typescript enum! Then it will show a dropdown selector here in Storybook.) Set the color for the current element and any children elements that choose to use it. Use whatever color you set in your variables.css file. You can import the default file to start: @ps/ui/styles/global/variables.css
   */
  'data-color'?: string;
  /**
   * This component and all elements inside it will use theme.colors[colorGroup].dark (if defined), if not will fall back to alternative
   */
  'dark'?: boolean;
  /**
   * This component and all elements inside it will use theme.colors[colorGroup].light (if defined), if not will fall back to alternative
   */
  'light'?: boolean;
  /**
   * This refers to a color in the global stylesheet which you can import from styles/global/variables.css and modify. If does not exist, will be ignored. This simply adds a data-color attribute to the element, which will be used to style the element.
   */
  'color'?: string;
};

export type ReactForwardedRefType = any; // tsFix - what is the type of "ref" as returned by React.forwardRef()?

export type ssComponentPropsType = ssProps;

export default ssComponentPropsType;
