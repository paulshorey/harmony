import { ssComponentPropsType, ReactForwardedRefType, ssPropType } from "./component";
import themeType from "./theme";
export {};

declare global {
  type props = ssComponentPropsType;
  type theme = themeType;

  type ssProp = ssPropType;

  // tsFix - any used to by SerializedStyled from @emotion/styled - update this to use @emotion/styled
  type EmotionCssFunction = (theme: theme, ...args: any) => any;

  /**
   * This accepts many different types. It will be passed to style_to_string(), and parsed according to type.
   */
  type ssFunction = (theme: theme, ...args: any) => string;

  type colorShade = "" | "onDark" | string;
  type colorGroupKey = "" | "accent" | "cta1" | "cta2" | string;
  type colorGroupValue = Record<colorShade, Record<string, string>>;
  type colors = Record<string, colorGroupValue>;

  type ReactForwardedRef = ReactForwardedRefType;
}
