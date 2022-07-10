import ThemeProvider from '@spiral/ui/ThemeProvider';
import React, { FC } from 'react';
import { ErrorProvider } from 'src/context/error';

import { RoutesSessionHistory } from '../../molecules/RoutesSessionHistory';

type AppProviderProps = {
  children: React.ReactNode;
};

const AppProvider: FC<AppProviderProps> = ({ children }) => (
  <>
    <RoutesSessionHistory />
    <ThemeProvider>
          <ErrorProvider>
                {children}
          </ErrorProvider>
    </ThemeProvider>
  </>
);
export default AppProvider;
