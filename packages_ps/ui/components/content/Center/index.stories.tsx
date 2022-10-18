import { Component } from '.';
import Template from './_story';
import description from './_story.md';
import { argTypes } from '@ps/ui/styles/storybook';
import variants from './variants';
const variantKeys = Object.keys(variants);
const args = {
  variants: ['bg', 'center'],
  color: 'white',
  shade: '',
  ss: '> * { max-width:400px;}',
};

export const Center = Template.bind({});
Center.argTypes = argTypes(variantKeys);
Center.args = args;

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
        code: ``,
      },
    },
  },
};
