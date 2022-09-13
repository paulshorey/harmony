import { Story } from '@storybook/react';
import React from 'react';
import { AuthProvider } from 'src/context/auth';

import Header from '.';

export default {
  component: Header,
  title: 'Design Systems/Organisms/Header',
};

const Template: Story = (args) => (
  <AuthProvider>
    <Header {...args} />
  </AuthProvider>
);

export const Default = Template.bind({});
Default.args = {};
