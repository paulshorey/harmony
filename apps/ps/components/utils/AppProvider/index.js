import theme from '@ps/ui/styles/theme';
import withGlobalThemeAndStyles from '@ps/ui/hooks/withGlobalThemeAndStyles';
import fonts from '@ps/ui/styles/global/fonts';
import html from '@ps/ui/styles/global/html';
import layout from '@ps/ui/styles/global/layout';
import '@ps/ui/styles/global/variables.css';

const AppProvider = ({ children }) => {
  return withGlobalThemeAndStyles(children, theme, [fonts, html, layout]);
};

export default AppProvider;
