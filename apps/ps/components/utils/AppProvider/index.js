import '@ps/ui/styles/global/variables.css';
import ThemeProvider from '@ps/ui/components/utils/ThemeProvider';

const AppProvider = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default AppProvider;
