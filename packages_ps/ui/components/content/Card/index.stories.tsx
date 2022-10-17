import { Component } from '.';
import Template from './_story';
import description from './_story.md';
import { argTypes } from '@ps/ui/styles/storybook';
import variants from './variants';
const variantKeys = Object.keys(variants);
const args = {
  variants: ['hoverTilt'],
  color: 'white',
  variant: 'bg',
  shade: '',
  ss: '',
};

export const Card = Template.bind({});
Card.argTypes = argTypes(variantKeys);
Card.args = args;

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
