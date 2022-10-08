import RouterMock from './RouterMock';
import { render } from '@testing-library/react';
import React, { ReactElement } from 'react';

const Providers = ({ children }: any) => {
  return <RouterMock>{children}</RouterMock>;
};

const customRender = (ui: ReactElement, options = {}) =>
  render(ui, { wrapper: Providers, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
