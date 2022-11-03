import { Component } from '.';
import _box, { code } from './_story';
import description from './_story.md';
import { argTypes } from '@ps/ui/styles/storybook';
import variants from './styles';

const variantKeys = Object.keys(variants);

export const Block = _box.bind({});
Block.argTypes = argTypes({ localVariants: variantKeys });
Block.args = {
  variant: 'card',
  textcolor: 'purple',
  textgradient: '',
  bgcolor: '',
  bggradient: 'light',
  as: 'article',
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
