import { ssProp } from '@ps/ui/types/styles';
import { css, cx } from '@emotion/css';

/**
 * EXPERIMENTAL: Server-Side-Rendering may not work
 */
export default function style_to_string(style: ssProp): string {
  return cx(css(style));
}
