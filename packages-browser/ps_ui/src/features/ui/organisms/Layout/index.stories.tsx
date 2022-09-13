import { Story } from '@storybook/react';
import React from 'react';
import { AuthProvider } from 'src/context/auth';
import RouterMock from 'src/test-utils/RouterMock';

import Layout, { LayoutProps } from '.';

export default {
  component: Layout,
  title: 'Design Systems/Organisms/Layout',
};

const Template: Story<LayoutProps> = (args) => (
  <AuthProvider>
    <RouterMock>
      <Layout {...args} />
    </RouterMock>
  </AuthProvider>
);

export const Default = Template.bind({});
Default.args = {
  children: [<div key={1}>Content</div>],
};

export const NoMenu = Template.bind({});

NoMenu.args = {
  children: [<div key={1}>Content</div>],
  noLeftMenu: true,
};
