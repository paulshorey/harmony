import { action } from '@storybook/addon-actions';
import React from 'react';

import Button from '.';
import styles from './styles';

const handleClick = action('Button clicked');

export default {
  component: Button,
  title: 'layout/molecules/Buttons',
};

const Template = (args) => <Button {...args} />;
const variants = Object.keys(styles);
const argTypes = {
  variant: {
    control: { type: 'select' },
    options: variants,
  },
  variants: {
    control: { type: 'multi-select' },
    options: variants, // Automatically inferred when 'options' is defined
  },
};

export const Buttons = Template.bind({});
Buttons.argTypes = argTypes;
Buttons.args = {
  variants: [''],
  label: 'Submit',
  onClick: handleClick,
};
