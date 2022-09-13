import { action } from '@storybook/addon-actions';
import { Story } from '@storybook/react';
import React from 'react';

import PasswordInput, { Props } from '.';

const onChange = action('Password Accepted');

export default {
  component: PasswordInput,
  title: 'Design Systems/Molecules/PasswordInput',
};

const Template: Story<Props> = (args) => <PasswordInput {...args} />;

export const Default = Template.bind({});
Template.args = {
  isValid: true,
  onChange,
  rightElementTestId: 'check-password',
};
