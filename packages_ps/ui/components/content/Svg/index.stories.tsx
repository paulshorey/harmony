import { Component } from '.';
import _box, { code } from './_story';
import description from './_story.md';
import { argTypes } from '@ps/ui/styles/storybook';
import variants from './variants';
const variantKeys = Object.keys(variants);

export const Svg = _box.bind({});
Svg.argTypes = argTypes(variantKeys);
Svg.args = {
  'variant': 'textInfo',
  'data-color': '',
  'ss': 'display:inline;',
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
