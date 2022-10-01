import { SerializedStyles } from '@emotion/react';
import { colorsKeyType } from 'styles/colors';

import { HtmlContainerTags as HtmlContainerTagsImport } from './html';

export type HtmlContainerTags = HtmlContainerTagsImport;

export type EmotionCssPropType =
  | SerializedStyles
  | Array<SerializedStyles | ((...args: any) => any)>
  | ((...args: any) => any);

export type StylesFile = Record<string, EmotionCssPropType>;

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
  /**
   * One or multiple variants as a string, separated by spaces. Will be used in addition to variants. This maybe useful if you apply variants programmatically for all components in the file, but need to amend just one unique instance of the component.
   */
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
  ss?: string | EmotionCssPropType;
  /**
   * `@media (min-width: 931px)` - Does not target any specific device. Mostly desktop, some tablets. 931px is an arbitrary number. It's just the minimum width where desktop designs look good. Below this it's very hard to fit all the desktop content. Same as `theme.mq.lg`.
   */
  ssLg?: string | EmotionCssPropType;
  /**
   * `@media (max-width: 930px)` - Does not target any specific device. Some desktop, some tablets, but mostly phones. This complements ssLg. Same as `theme.mq.sm`.
   */
  ssSm?: string | EmotionCssPropType;
  /**
   * `@media (min-width: 1025px)` - Desktop, Laptop, iPad 12in Landscape. Use in conjunction with ssMobile which is <= 1024px. Same as `theme.mq.desktop`.
   */
  ssDesktop?: string | EmotionCssPropType;
  /**
   * `@media (max-width: 1024px)` - Mobile, Tablet, iPad 12in Portrait, iPad 9in in any orientation. Use in conjunction with ssDesktop which is >= 1025px. Same as `theme.mq.mobile`.
   */
  ssMobile?: string | EmotionCssPropType;
  /**
   * phones only, not tablets ( <= 499px wide ) Same as `theme.mq.phone`.
   */
  ssPhone?: string | EmotionCssPropType;
  /**
   * extra narrow devices like iPhone 8/X/SE ( <= 399px wide ) Same as `theme.mq.smallPhone`.
   */
  ssSmallPhone?: string | EmotionCssPropType;
  /**
   * includes iPad-12 portrait and iPad-9 landscape or portrait ( >= 737px wide, <= 1024px wide ) Same as `theme.mq.tablet`.
   */
  ssTablet?: string | EmotionCssPropType;
  /**
   * the very awkward size where we no longer support the mobile design, but it feels big enough to maybe be desktop ( >= 931px wide, <= 1024px wide ) Same as `theme.mq.largeTablet`.
   */
  ssLargeTablet?: string | EmotionCssPropType;
  /**
   * everything >= 500px wide. Same as `theme.mq.notPhone`.
   */
  ssNotPhone?: string | EmotionCssPropType;
  /**
   * <= 359px wide.  Same as `theme.mq.tinyPhone`.
   */
  ssTinyPhone?: string | EmotionCssPropType;
  /**
   * \>= 1440px wide. Same as `theme.mq.largeDesktop`.
   */
  ssLargeDesktop?: string | EmotionCssPropType;
  /**
   * \>= 1920px wide. Same as `theme.mq.veryLargeDesktop`.
   */
  ssVeryLargeDesktop?: string | EmotionCssPropType;
  /**
   * Portrait orientation (height > width). Same as `theme.mq.portrait`.
   */
  ssPortrait?: string | EmotionCssPropType;
  /**
   * Landscape orientation (width > height). Same as `theme.mq.landscape`.
   */
  ssLandscape?: string | EmotionCssPropType;
  /**
   * Rendered inside iframe. Does not have a `theme.mq` equivalent. This is implemented using JavaScript, not media queries.
   */
  ssIframe?: string | EmotionCssPropType;
  /**
   * Not in an iframe. Does not have a `theme.mq` equivalent. This is implemented using JavaScript, not media queries.
   */
  ssNotIframe?: string | EmotionCssPropType;
  /**
   * In an app WebView. Does not have a `theme.mq` equivalent. This is implemented using JavaScript, not media queries.
   */
  ssWebview?: string | EmotionCssPropType;
  /**
   * Not in WebView. Does not have a `theme.mq` equivalent. This is implemented using JavaScript, not media queries.
   */
  ssNotWebview?: string | EmotionCssPropType;
  /**
   * OS == 'Mac'. Does not have a `theme.mq` equivalent. This is implemented using JavaScript, not media queries.
   */
  ssMac?: string | EmotionCssPropType;
  /**
   * OS == 'Windows'. Does not have a `theme.mq` equivalent. This is implemented using JavaScript, not media queries.
   */
  ssWindows?: string | EmotionCssPropType;
  /**
   * OS == 'Linux'. Does not have a `theme.mq` equivalent. This is implemented using JavaScript, not media queries.
   */
  ssLinux?: string | EmotionCssPropType;
  /**
   * OS == 'Android'. Does not have a `theme.mq` equivalent. This is implemented using JavaScript, not media queries.
   */
  ssAndroid?: string | EmotionCssPropType;
  /**
   * OS == 'iOS'. Does not have a `theme.mq` equivalent. This is implemented using JavaScript, not media queries.
   */
  ssIOS?: string | EmotionCssPropType;
  /**
   * device is 'iPhone'. Does not have a `theme.mq` equivalent. This is implemented using JavaScript, not media queries.
   */
  ssIPhone?: string | EmotionCssPropType;
  /**
   * device is 'iPad'. Does not have a `theme.mq` equivalent. This is implemented using JavaScript, not media queries.
   */
  ssIPad?: string | EmotionCssPropType;
  /**
   * EmotionJS css prop. This component actually does not handle this prop. It must be configured in your app's Babel/Webpack config. See https://emotion.sh/docs/css-prop. It will be applied by your app's compiler, then passed to this component as className, which this component will accept. If you don't want to use the provided custom ss props, or css, you can always pass the standard `style`. All allowable HTML attributes will be passed to the DOM element.
   */
  css?: EmotionCssPropType;
  /**
   * Standard old fashioned React JS object. Ignored by this component. Simply passed down to the HTML element.
   */
  style?: Record<string, any>;
  /**
   * Pass props.onDark key as a shorthand for props.variants['onDark']. It can be undefined. Value will be ignored.
   */
  onDark?: any;
  /**
   * Pass props.onLight key as a shorthand for props.variants['onLight']. It can be undefined. Value will be ignored.
   */
  onLight?: any;
  /**
   * Will be passed to 2nd argument of a variants EmotionJS style function, as a property of an object containing other options for that one current instance of the component. Value is not actually a color, but a key of themes.colors.
   */
  color?: colorsKeyType;
};
