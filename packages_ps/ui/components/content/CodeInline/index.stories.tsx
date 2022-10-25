import { Component } from '.';
import Template, { code } from './_story';
import description from './_story.md';
import { argTypes } from '@ps/ui/styles/storybook';
import variants from './variants';
const variantKeys = Object.keys(variants);
const args = {
  variant: '',
  color: '',
  ss: '',
};

export const CodeInline = Template.bind({});
CodeInline.argTypes = argTypes(variantKeys);
CodeInline.args = args;

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
