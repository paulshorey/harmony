import { Component } from '.';
import Template from './_story';
import description from './_story.md';
import { argTypes } from 'styles/storybook';
import variants from './variants';
const variantKeys = Object.keys(variants);
const args = {
  ss: 'max-width: 400px; .nowrap {color: orange;}',
  variants: ['text-gradient', 'centered'],
  variant: 'bg',
  color: 'cta1',
  shade: 'onLight',
};

export const Block = Template.bind({});
Block.argTypes = argTypes(variantKeys);
Block.args = args;

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
