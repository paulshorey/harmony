import { Component } from '.';
import Template, { code } from './_story';
import description from './_story.md';
import { argTypes } from '@ps/ui/styles/storybook';
import variants from './variants';

const variantKeys = Object.keys(variants);
const args = {
  textcolor: '',
  bgcolor: '',
  size: '',
};

export const Form = Template.bind({});
Form.argTypes = argTypes({ localVariants: variantKeys });
Form.args = args;

export default {
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
