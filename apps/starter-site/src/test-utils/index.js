/* eslint-disable import/export */
import { render } from '@testing-library/react';
import { node } from 'prop-types';
import React from 'react';
import AppProvider from 'src/components/organisms/AppProvider';

import RouterMock from './RouterMock';

const Providers = ({ children }) => {
  return (
    <RouterMock>
      <AppProvider>{children}</AppProvider>
    </RouterMock>
  );
};

Providers.propTypes = {
  children: node.isRequired,
};
const customRender = (ui, options = {}) =>
  render(ui, { wrapper: Providers, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
