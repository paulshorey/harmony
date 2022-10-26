import { Component } from '.';
import Template, { code } from './_story';
import description from './_story.md';
import { argTypes } from '@ps/ui/styles/storybook';
import variants from './index.module.css';

const variantKeys = Object.keys(variants);
const args = {
  ss: 'margin: 0 0.875rem 1.125rem 0;',
};

export const Button = Template.bind({});
Button.argTypes = argTypes(variantKeys);
Button.args = args;

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
