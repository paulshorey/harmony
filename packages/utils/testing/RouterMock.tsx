import { action } from '@storybook/addon-actions';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import Router from 'next/router';
import React, { useState } from 'react';

type Props = {
  values?: Record<string, any>;
};

const RouterMock: React.FC<Props> = ({ children, values }) => {
  const [pathname, setPathname] = useState<string>('/');

  const mockRouter = {
    events: {
      off: () => null,
      on: () => null,
    },
    pathname,
    prefetch: () => Promise.resolve(),
    push: async (newPathname: string) => {
      action('Clicked link')(newPathname);
      setPathname(newPathname);
    },
    ...values,
  };

  // @ts-ignore
  Router.router = mockRouter;

  return (
    // @ts-ignore
    <RouterContext.Provider value={mockRouter}>
      {children}
    </RouterContext.Provider>
  );
};

export default RouterMock;
