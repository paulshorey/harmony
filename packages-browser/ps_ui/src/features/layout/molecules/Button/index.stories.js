import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from '.';
import styles from './styles';

const handleClick = action('Button clicked');

export default {
  title: 'Design Systems/Atoms/Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;
const variants = Object.keys(styles);
const argTypes = {
  variant: {
    options: variants,
    control: { type: 'select' },
  },
  variants: {
    options: variants,
    control: { type: 'multi-select' }, // Automatically inferred when 'options' is defined
  },
};

export const DefaultVariant = Template.bind({});
DefaultVariant.argTypes = argTypes;
DefaultVariant.args = {
  label: 'Submit',
  variant: 'default',
  onClick: handleClick,
};

export const DefaultVariants = Template.bind({});
DefaultVariants.argTypes = argTypes;
DefaultVariants.args = {
  label: 'Cancel',
  variants: ['default'],
  onClick: handleClick,
};
