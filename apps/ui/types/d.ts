import { styleProps, anyType, ssPropType } from './styles';
import themeType from './theme';

export {};

declare global {
  type props = styleProps;
  type theme = themeType;

  type ssProp = ssPropType;

  // tsFix - any used to by SerializedStyled from @emotion/styled - update this to use @emotion/styled
  type EmotionCssFunction = (theme: theme, ...args: any) => any;

  /**
   * This accepts many different types. It will be passed to style_to_string(), and parsed according to type.
   */
  type ssFunction = (theme: theme, ...args: any) => string;
}
