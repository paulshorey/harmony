import React from 'react';
import Fieldset from './index';
import { action } from '@storybook/addon-actions';

const onChange = action('Value changed');

export default {
  title: 'Design Systems/Molecules/CheckboxFieldset',
  component: Fieldset,
};

const Template = (args) => <Fieldset {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: true,
  onChange,
};
