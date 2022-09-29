import { css, useTheme } from '@emotion/react';
import emotionToString from '@ps/fn/browser/style/emotion_to_string';
import { EmotionCSSType } from 'types/component';

type Props = {
  label?: string;
  style?: any;
  styles?: any;
  theme?: any;
  variant?: string;
  variants?: Array<string>;
  options?: Record<string, any>;
};
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
const _ = function ({
  // label,
  options,
  style,
  styles,
  theme,
  variant,
  variants,
}: Props): EmotionCSSType {
  // Sometimes (atoms/Grid) we may want to modify the theme for a specific component.
  if (!theme) {
    theme = useTheme();
  }

  // Get output ready
  let mqString = '';

  // Compile variant keys
  const strvars = variant?.split(' ') || [];
  const theseVariants = ['default', ...strvars, ...(variants || [])];
  for (const variant of theseVariants) {
    if (variant && styles?.[variant]) {
      mqString += emotionToString(styles[variant], theme, options);
    }
  }

  // Also apply any regular emotion css. It can be passed in as any type (string, object, function)
  // If type Array, not just object, loop through each item and apply css. Emotion doesn't do that reliably.
  if (style) {
    if (Array.isArray(style)) {
      mqString = style
        .map((item) => emotionToString(item, theme, options))
        .join(' ');
    } else {
      mqString += emotionToString(style, theme, options);
    }
  }

  return css`
    ${mqString}
  `;
};
export default _;

// ${label ? `;label: ${label}` : ''};
