import React from 'react';
import { action } from '@storybook/addon-actions';
import Checkbox from '.';

const onChange = action('Value changed');

export default {
  title: 'Design Systems/Atoms/Checkbox',
  component: Checkbox,
};

const Template = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: true,
  onChange,
};
