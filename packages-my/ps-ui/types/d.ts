import { SerializedStyles } from '@emotion/react';
import { ComponentPropsType } from './component';
import { CSSInterpolation } from '@emotion/serialize';
export {};

declare global {
  type props = ComponentPropsType;

  type EmotionCssFunction = (theme: theme, ...args: any) => SerializedStyles;
  type EmotionCssProp =
    | CSSInterpolation
    | EmotionCssFunction
    | SerializedStyles
    | Array<SerializedStyles | EmotionCssFunction | CSSInterpolation>;

  /**
   * This accepts many different types. It will be passed to style_to_string(), and parsed according to type.
   */
  type ssFunction = (theme: theme, ...args: any) => string;

  type colorShade = 'default' | 'onDark';
  // tsFix // typescript can't javascript variable, so idk how to make this more specific, but dynamic
  type colorGroupKey = 'default' | 'accent' | 'cta1' | 'cta2'; // tsFix
  type colorGroupValue = Record<colorShade, Record<string, string>>;
  type colors = Record<string, colorGroupValue>;

  type theme = {
    colorGroupDefault: colorGroupKey;
    colorShadeDefault: colorShade;
    variants: Record<string, EmotionCssProp | ssFunction>;
    /**
     * Colors should not be accessed directly. Use theme.getColor() instead.
     */
    colors: colors;
    fonts: Record<string, string>;
    mq: Record<string, string>;
    getColor: (key: string, color?: colorGroupKey, shade?: colorShade) => {};
    /**
     * Mutable. Temporary. Gets overwritten by each component render, in withStyles().
     * Persists just long enough to be read by the component when it is being styled.
     * It is never destroyed - only overwritten by the next component to be rendered.
     */
    instance: {
      /**
       * See what other variants are used by the component. Adjust styles accordingly.
       */
      variants?: Record<string, boolean>;
      /**
       * See colors.ts - key of the color group to use
       */
      color: colorGroupKey;
      /**
       * See colors.ts - default or onDark
       */
      shade: colorShade;
      /**
       * Check from your ss/css style function by using `theme.instance.size`.
       * Adjust padding/margin/font-size according to this variable.
       */
      size: string;
    };
    globalStyles: Record<string, EmotionCssFunction>;
    getGlobalStyles: () => Array<EmotionCssFunction>;
  };
}
