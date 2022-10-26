import { ssComponentPropsType, anyType, ssPropType } from './component';
import themeType from './theme';
export {};

declare global {
  type props = ssComponentPropsType;
  type theme = themeType;

  type ssProp = ssPropType;

  // tsFix - any used to by SerializedStyled from @emotion/styled - update this to use @emotion/styled
  type EmotionCssFunction = (theme, ...args: any) => any;

  /**
   * This accepts many different types. It will be passed to style_to_string(), and parsed according to type.
   */
  type ssFunction = (theme, ...args: any) => string;
}
