/*
 * Work in progress...
 */
import { styleProps, ssProp as ssPropType } from './styles';
import themeType from './theme';

export {};

declare global {
  type props = styleProps;
  type theme = themeType;
  type ssProp = ssPropType;
}
