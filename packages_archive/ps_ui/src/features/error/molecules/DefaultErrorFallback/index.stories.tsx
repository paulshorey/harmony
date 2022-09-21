import { Story } from '@storybook/react';
import React from 'react';

import DefaultErrorFallback from '.';

export default {
  component: DefaultErrorFallback,
  title: 'Design Systems/molecules/DefaultErrorFallback',
};

const Template: Story = () => {
  return <DefaultErrorFallback />;
};

export const Default = Template.bind({});

Default.args = {};

Default.parameters = {};
