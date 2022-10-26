import { Component } from '.';
import _story, { code } from './_story';
import description from './_story.md';
import { argTypes } from '@ps/ui/styles/storybook';
import variants from './variants';
const variantKeys = Object.keys(variants);

export const Text = _story.bind({});
Text.argTypes = argTypes(variantKeys);
Text.args = {
  textgradient: 'purple',
  ss: 'display:inline-block;',
};

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
