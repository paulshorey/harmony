export type theme = {
  colorGroupDefault?: colorGroupKey | "";
  colorShadeDefault?: colorShade | "";
  variants?: Record<string, ssProp>;
  /**
   * Colors should not be accessed directly. This JS object will be used to generate CSS variables.
   */
  colors?: colors;
  fonts?: Record<string, string>;
  mq?: Record<string, string>;
  getColor?: (key: string, color?: colorGroupKey, shade?: colorShade) => {};
  /**
   * Mutable. Temporary. Gets overwritten by each component render, in withStyles().
   * Persists just long enough to be read by the component when it is being styled.
   * It is never destroyed - only overwritten by the next component to be rendered.
   */
  instance?: {
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
  globalStyles?: Record<string, ssProp>;
  getGlobalStyles?: () => Array<ssProp>;
};

export default theme;
