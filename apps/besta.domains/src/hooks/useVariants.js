import { css, useTheme } from '@emotion/react';
import emotionToString from 'src/helpers/emotionToString';
import vars from 'src/styles/vars';

/**
 * Aggregate styles, return combined css, with good specificity. This one will really benefit from Typescript!
 * ```
 *  <button css={useVariants({ styles, variant:'outlined', css:{css`padding-left: 30px;`} })}
 * ```
 * This will first apply `styles.default` (if exists), then `styles.outlined`, then `padding-left`
 * ```
 *  <button css={useVariants({ styles, variants: ['primary', disabled && 'disabled' ] })}
 * ```
 * This will apply `styles.default` (if exists), then `styles.primary`, then `styles.disabled`
 */
const _ = function ({ theme, style, styleSm, styleLg, styles, variant, variants }) {
  // Sometimes (atoms/Grid) we may want to modify the theme for a specific component.
  if (!theme) {
    theme = useTheme();
  }

  let cssString = '';
  // Then, add each variant's css (if it exists in styles)
  // If no variants specified, this will try to use `styles.default`.
  const theseVariants = ['default', variant, ...(variants || [])];
  for (const variant of theseVariants) {
    if (variant && styles?.[variant]) {
      cssString += emotionToString(styles[variant], theme);
    }
  }

  // Also apply any regular emotion css. It can be passed in as any type (string, object, function)
  // If type Array, not just object, loop through each item and apply css. Emotion doesn't do that reliably.
  if (style) {
    if (Array.isArray(style)) {
      cssString = style.map((item) => emotionToString(item, theme)).join(' ');
    } else {
      cssString += emotionToString(style, theme);
    }
  }

  // Responsive styles
  if (styleSm) {
    cssString += `${vars.mq.sm} {
      ${emotionToString(styleSm, theme)};
    }`;
  }
  if (styleLg) {
    cssString += `${vars.mq.lg} {
      ${emotionToString(styleLg, theme)};
    }`;
  }

  return css`
    ${cssString}
  `;
  // ${label ? `label: ${label};` : ''}; // Un-necessary?
};
export default _;
