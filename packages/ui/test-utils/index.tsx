/* eslint-disable import/export */
import RouterMock from '@spiral/utils/testing/RouterMock';
import { render } from '@testing-library/react';
import { FC, ReactElement } from 'react';

import ThemeProvider from '../ThemeProvider';

const Providers: FC = ({ children }) => {
  return (
    <RouterMock>
      <ThemeProvider>{children}</ThemeProvider>
    </RouterMock>
  );
};

const customRender = (ui: ReactElement, options = {}) =>
  render(ui, { wrapper: Providers, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
