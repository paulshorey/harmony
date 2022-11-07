import ThemeProvider from '@ps/ui/components/ThemeProvider';

const AppProvider = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default AppProvider;
