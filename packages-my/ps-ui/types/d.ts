import { SerializedStyles } from '@emotion/react';
import { ComponentPropsType } from './component';
export {};

declare global {
  type props = ComponentPropsType;

  type EmotionCssProp =
    | SerializedStyles
    | Array<SerializedStyles | ((...args: any) => any)>
    | ((...args: any) => any);

  type colorShade = 'onLight' | 'onDark';
  type colorGroupKey = 'neutral' | 'accent' | 'cta1' | 'cta2';
  type colorGroupValue = Record<colorShade, Record<string, string>>;
  type colors = Record<colorGroupKey, colorGroupValue>;

  type theme = {
    variants: Record<string, EmotionCssProp>;
    /**
     * Colors should not be accessed directly. Use theme.getColor() instead.
     */
    colors: colors;
    fonts: Record<string, string>;
    mq: Record<string, string>;
    getColor: (key: string, color?: string, shade?: string) => {};
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
      color?: string;
      /**
       * See colors.ts - onLight or onDark
       */
      shade?: string;
      /**
       * Check from your ss/css style function by using `theme.instance.size`.
       * Adjust padding/margin/font-size according to this variable.
       */
      size?: string;
    };
  };
}
