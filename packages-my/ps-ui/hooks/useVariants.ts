import { css, useTheme } from '@emotion/react';
import emotionToString from '@ps/fn/browser/style/style_to_string';
import { EmotionCssProp } from 'types/component';

type Props = {
  label?: string;
  style?: any;
  styles?: any;
  sVariant?: string;
  sVariants?: Array<string>;
  sOptions?: Record<string, any>;
};
/**
 * Aggregate styles, return combined css, with good specificity. This one will really benefit from Typescript!
 * ```
 *  <button css={useVariants({ styles, sVariant:'outlined', css:{`padding-left: 30px;`} })}
 * ```
 * This will first apply `styles.default` (if exists), then `styles.outlined`, then `padding-left`
 * ```
 *  <button css={useVariants({ styles, sVariants: ['primary', disabled && 'disabled' ] })}
 * ```
 * This will apply `styles.default` (if exists), then `styles.primary`, then `styles.disabled`
 */
const _ = function ({
  // label,
  sOptions,
  sVariant,
  sVariants,
  style,
  styles,
}: Props): EmotionCssProp {
  // Sometimes (atoms/Grid) we may want to modify the theme for a specific component.
  if (!theme) {
    theme = useTheme();
  }

  // Get output ready
  let ssString = '';

  // Compile sVariant keys
  const strvars = sVariant?.split(' ') || [];
  const theseVariants = ['default', ...strvars, ...(sVariants || [])];
  for (const sVariant of theseVariants) {
    if (sVariant && styles?.[sVariant]) {
      ssString += emotionToString(styles[sVariant], theme, sOptions);
    }
  }

  // Also apply any regular emotion css. It can be passed in as any type (string, object, function)
  // If type Array, not just object, loop through each item and apply css. Emotion doesn't do that reliably.
  if (style) {
    if (Array.isArray(style)) {
      ssString = style
        .map((item) => emotionToString(item, theme, sOptions))
        .join(' ');
    } else {
      ssString += emotionToString(style, theme, sOptions);
    }
  }

  return `
    ${ssString}
  `;
};
export default _;

// ${label ? `;label: ${label}` : ''};
