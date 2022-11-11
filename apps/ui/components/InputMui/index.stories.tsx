import { Component } from '.';
import Template, { code } from './_story';
import description from './_story.md';
import { argTypes } from '@ps/ui/helpers/storybook_args';
import variants from './styles';

const variantKeys = Object.keys(variants);
const args = {
  size: 'lg',
  variant: '',
  round: true,
  loading: false,
  children: 'text input',
};

export const InputMui = Template.bind({});
InputMui.argTypes = {
  size: {
    control: {
      type: 'select',
    },
    options: ['xs', 'sm', 'md', 'lg', 'xl'],
  },
  ...argTypes({ localVariants: variantKeys }),
};
InputMui.args = args;

export default {
  title: 'Form/InputMui',
  component: Component,
  parameters: {
    viewMode: 'docs',
    previewTabs: {
      canvas: { hidden: true },
    },
    docs: {
      description: {
        component: description,
      },
      source: {
        code,
      },
    },
  },
};
