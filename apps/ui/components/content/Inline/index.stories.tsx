import { Component } from '.';
import _story, { code } from './_story';
import description from './_story.md';
import { argTypes } from '@ps/ui/styles/storybook';
import variants from './variants';

const variantKeys = Object.keys(variants);

export const Inline = _story.bind({});
Inline.argTypes = argTypes({ localVariants: variantKeys });
Inline.args = {
  textgradient: 'purple',
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
