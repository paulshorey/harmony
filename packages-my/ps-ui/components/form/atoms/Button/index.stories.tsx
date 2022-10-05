import { Component } from '.';
import Template from './_story';
import description from './_story.md';
import { argTypes } from 'styles/storybook';
import variants from './variants';
import { Block } from 'components/content/atoms/Block';
const variantKeys = Object.keys(variants);
const args = {
  ss: '',
  variants: ['bg-gradient'],
  color: 'cta2',
  shade: 'onDark',
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
        code: `<Block ss="padding:2rem;"><Button {...args}>Button text</Button></Block>`,
      },
    },
  },
};
