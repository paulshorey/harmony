import React from 'react';

// tsFix: what types are returned by emotion' css`` template literal function? Interpolation | SerializedStyles
type cssReturnType = any | null | undefined;

export type styledTags = React.ElementType<any>;

export type ssProp =
  | string
  | ((props) => string)
  | Array<string | ((props) => string)>
  | cssReturnType;

export type uniqueStyleProps = {};

/**
 * Props used by this UI library
 */
export type styleProps = {
  /**
   * HTML element tag name to render. All other aspects of the component (all CSS) will be unchanged. Or pass a React element to use.
   */
  as?: styledTags;
  /**
   * Each component has a `variants.ts` file in its folder - it sets the styles for the component. Variant is also used by the JS code to set logic/layout/markup of the component.
   */
  variant?: string;
  /**
   * Refers to [data-textcolor] groups you defined in your global css file. Import: @ps/ui/styles/theme.css
   */
  textcolor?: string;
  /**
   * Refers to [data-textcolor] groups you defined in your global css file. Import: @ps/ui/styles/theme.css - NOT RECOMMENDED for block-level elements or elements with children. Works best on simple inline text.
   */
  textgradient?: string;
  /**
   * Refers to [data-bgcolor] groups you defined in your global css file. Import: @ps/ui/styles/theme.css
   */
  bgcolor?: string;
  /**
   * Refers to [data-bgcolor] groups you defined in your global css file. Import: @ps/ui/styles/theme.css
   */
  bggradient?: string;
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
   * applies to all sizes and devices, like ss, but this is wrapped inside a media query, to force-add specificity. Same as `theme.mq.all`.
   */
  ssAll?: ssProp;
  /**
   * The name of the component. Unique per component. Will be added to className. When looking in the browser Dev Tools, know which div was generated by which component.
   */
  componentName?: string;
  className?: string;
  /**
   * Your site theme is injected into props by hooks/withStyles.tsx so you can use it in your EmotionJS/StyledComponents css\`\` template literal: (1 - any component in this library) `<Block ss={(props) => \`padding:${props.theme.card.paddingX}\`} />` (2 - use styled components) `styled(Block)\`padding:${props => props.theme.card.paddingX}\`` (3 - emotion css prop) `<div css={css\`padding:${props => props.theme.card.paddingX}\`} />`.
   */
  theme?: any;
};
export default styleProps;
