import { Component } from '.';
import _box, { code } from './_story';
import description from './_story.md';
import { argTypes } from '@ps/ui/styles/storybook';
import variants from './index.module.css';
const variantKeys = Object.keys(variants);

export const Box = _box.bind({});
Box.argTypes = argTypes(variantKeys);
Box.args = {
  className: '',
  color: 'purple',
  ss: 'display:inline;',
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
