import { SerializedStyles } from '@emotion/react';
// import { colorGroupType, colorShadeType } from 'styles/colors';
type colorGroupType = string;
type colorShadeType = string;

import { HtmlContainerTags as HtmlContainerTagsImport } from './html';

export type HtmlContainerTags = HtmlContainerTagsImport;

export type EmotionCssProp =
  | SerializedStyles
  | Array<SerializedStyles | ((...args: any) => any)>
  | ((...args: any) => any);

/**
 * Good practice is to create a `styles.ts` file next to every React component.
 * This file should default export an object with keys that match any props.variants that might be passed to the component.
 * Also include a `default` key for the default styles.
 */
export type StylesType = Record<string, EmotionCssProp>;

export type ReactFCProps = {
  /**
   * Will be passed to the base DOM element using React.forwardRef.
   */
  ref?: any;
  /**
   * EmotionJS css prop is optional. It must be configured in your app's Babel/Webpack config. See https://emotion.sh/docs/css-prop. It will be applied by your app's compiler, then passed to this component as className. As an alternative, you can use the custom `props.ss` - it has the same functionality but require no configuration. In addition to EmotionCssProp, it accepts css/scss as a plain string type.
   */
  // css?: EmotionCssProp;
  /**
   * Standard old fashioned React JS object. Ignored by this component. Simply passed down to the HTML element.
   */
  style?: Record<string, any>;
};

/**
 * Props used by this UI library
 */
export type StyleProps = {
  /**
   * Render one or multiple as string[]. Local variants are specific to the component. Higher specificity. There are also global variants, which apply to all components. Part of the theme, in `styles/variants.ts`.
   */
  variants?: Array<string>;
  /**
   * One or multiple variants as a string, separated by spaces. Will be used in addition to variants. This will have higher specificity than variants.
   */
  variant?: string;
  /**
   * HTML element tag name to render. All other aspects of the component (all CSS) will be unchanged.
   */
  as?: HtmlContainerTags;
  /**
   * Will not use any media queries or conditional logic.
   */
  ss?: string | EmotionCssProp;
  /**
   * `@media (min-width: 931px)` - Does not target any specific device. Mostly desktop, some tablets. 931px is an arbitrary number. It's just the minimum width where desktop designs look good. Below this it's very hard to fit all the desktop content. Same as `theme.mq.lg`.
   */
  ssLg?: string | EmotionCssProp;
  /**
   * `@media (max-width: 930px)` - Does not target any specific device. Some desktop, some tablets, but mostly phones. This complements ssLg. Same as `theme.mq.sm`.
   */
  ssSm?: string | EmotionCssProp;
  /**
   * `@media (min-width: 1025px)` - Desktop, Laptop, iPad 12in Landscape. Use in conjunction with ssMobile which is <= 1024px. Same as `theme.mq.desktop`.
   */
  ssDesktop?: string | EmotionCssProp;
  /**
   * `@media (max-width: 1024px)` - Mobile, Tablet, iPad 12in Portrait, iPad 9in in any orientation. Use in conjunction with ssDesktop which is >= 1025px. Same as `theme.mq.mobile`.
   */
  ssMobile?: string | EmotionCssProp;
  /**
   * phones only, not tablets ( <= 499px wide ) Same as `theme.mq.phone`.
   */
  ssPhone?: string | EmotionCssProp;
  /**
   * extra narrow devices like iPhone 8/X/SE ( <= 399px wide ) Same as `theme.mq.smallPhone`.
   */
  ssSmallPhone?: string | EmotionCssProp;
  /**
   * includes iPad-12 portrait and iPad-9 landscape or portrait ( >= 737px wide, <= 1024px wide ) Same as `theme.mq.tablet`.
   */
  ssTablet?: string | EmotionCssProp;
  /**
   * the very awkward size where we no longer support the mobile design, but it feels big enough to maybe be desktop ( >= 931px wide, <= 1024px wide ) Same as `theme.mq.largeTablet`.
   */
  ssLargeTablet?: string | EmotionCssProp;
  /**
   * everything >= 500px wide. Same as `theme.mq.notPhone`.
   */
  ssNotPhone?: string | EmotionCssProp;
  /**
   * <= 359px wide.  Same as `theme.mq.tinyPhone`.
   */
  ssTinyPhone?: string | EmotionCssProp;
  /**
   * \>= 1440px wide. Same as `theme.mq.largeDesktop`.
   */
  ssLargeDesktop?: string | EmotionCssProp;
  /**
   * \>= 1920px wide. Same as `theme.mq.veryLargeDesktop`.
   */
  ssVeryLargeDesktop?: string | EmotionCssProp;
  /**
   * Portrait orientation (height > width). Same as `theme.mq.portrait`.
   */
  ssPortrait?: string | EmotionCssProp;
  /**
   * Landscape orientation (width > height). Same as `theme.mq.landscape`.
   */
  ssLandscape?: string | EmotionCssProp;
  /**
   * Rendered inside iframe. Does not have a `theme.mq` equivalent. This is implemented using JavaScript, not media queries.
   */
  ssIframe?: string | EmotionCssProp;
  /**
   * Not in an iframe. Does not have a `theme.mq` equivalent. This is implemented using JavaScript, not media queries.
   */
  ssNotIframe?: string | EmotionCssProp;
  /**
   * In an app WebView. Does not have a `theme.mq` equivalent. This is implemented using JavaScript, not media queries.
   */
  ssWebview?: string | EmotionCssProp;
  /**
   * Not in WebView. Does not have a `theme.mq` equivalent. This is implemented using JavaScript, not media queries.
   */
  ssNotWebview?: string | EmotionCssProp;
  /**
   * OS == 'Mac'. Does not have a `theme.mq` equivalent. This is implemented using JavaScript, not media queries.
   */
  ssMac?: string | EmotionCssProp;
  /**
   * OS == 'Windows'. Does not have a `theme.mq` equivalent. This is implemented using JavaScript, not media queries.
   */
  ssWindows?: string | EmotionCssProp;
  /**
   * OS == 'Linux'. Does not have a `theme.mq` equivalent. This is implemented using JavaScript, not media queries.
   */
  ssLinux?: string | EmotionCssProp;
  /**
   * OS == 'Android'. Does not have a `theme.mq` equivalent. This is implemented using JavaScript, not media queries.
   */
  ssAndroid?: string | EmotionCssProp;
  /**
   * OS == 'iOS'. Does not have a `theme.mq` equivalent. This is implemented using JavaScript, not media queries.
   */
  ssIOS?: string | EmotionCssProp;
  /**
   * device is 'iPhone'. Does not have a `theme.mq` equivalent. This is implemented using JavaScript, not media queries.
   */
  ssIPhone?: string | EmotionCssProp;
  /**
   * device is 'iPad'. Does not have a `theme.mq` equivalent. This is implemented using JavaScript, not media queries.
   */
  ssIPad?: string | EmotionCssProp;
  // /**
  //  * Shorthand for props.variants['onDark']. It can be undefined. The key will be read and added to props.variants.
  //  */
  // onDark?: any;
  // /**
  //  * Shorthand for props.variants['onLight']. It can be undefined. The key will be read and added to props.variants.
  //  */
  // onLight?: any;
  /**
   * Specify how to color the component. Will be seen by variants and all styles as theme.instance.color. Pass to theme.getColors() function as 2nd argument, to specify the color group to use.
   */
  color?: colorGroupType;
  /**
   * Will be used by theme.getColors function to get you the color shade of color, 'onLight' or 'onDark'. Also, CSS-in-JS styles will see this and use it to return the appropriate background/border/text color. This tells the component that it is over a dark or light background.
   */
  shade?: colorShadeType;
};

export type ComponentPropsType = StyleProps & ReactFCProps;

export default ComponentPropsType;
