/* eslint-disable import/export */
import RouterMock from '../../packages-universal/ps_config/testing/RouterMock';
import { render } from '@testing-library/react';
import { FC, ReactElement } from 'react';

const Providers: FC = ({ children }) => {
  return <RouterMock>{children}</RouterMock>;
};

const customRender = (ui: ReactElement, options = {}) =>
  render(ui, { wrapper: Providers, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
