import theme from '@ps/ui/styles/theme';
import withGlobalThemeAndStyles from '@ps/ui/hooks/withGlobalThemeAndStyles';
import fonts from '@ps/ui/styles/global/fonts';
import html from '@ps/ui/styles/global/html';
import layout from '@ps/ui/styles/global/layout';
import '@ps/ui/styles/global/variables.css';
import { store } from 'redux/store';
import { Provider } from 'react-redux';

const AppProvider = ({ children }) => {
  return (
    <Provider store={store}>
      {withGlobalThemeAndStyles(children, theme, [fonts, html, layout])}
    </Provider>
  );
};

export default AppProvider;
