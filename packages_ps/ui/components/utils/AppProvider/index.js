import theme from '@ps/ui/styles/theme';
import withGlobalThemeAndStyles from '@ps/ui/hooks/withGlobalThemeAndStyles';
import variables from '@ps/ui/styles/global/variables';
import fonts from '@ps/ui/styles/global/fonts';
import html from '@ps/ui/styles/global/html';
import layout from '@ps/ui/styles/global/layout';
import styles from '@ps/ui/styles/global/styles';

const AppProvider = ({ children }) => {
  return withGlobalThemeAndStyles(children, theme, [
    variables,
    fonts,
    html,
    layout,
    styles,
  ]);
};

export default AppProvider;
