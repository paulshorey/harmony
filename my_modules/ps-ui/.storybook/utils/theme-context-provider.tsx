import * as React from 'react';
import ThemeContext from './theme-context';

type Props = {
  theme?: any;
  children?: React.ReactNode;
};

const ThemeContextProvider: React.FC<Props> = ({ theme, children }) => {
  const contextTheme = React.useMemo<any>(() => {
    return theme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={contextTheme}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
