import { Component } from '.';
import Template from './_story';
import description from './_story.md';
import { argTypes } from '@ps/ui/styles/storybook';
import variants from './variants';

const variantKeys = Object.keys(variants);
const args = {
  variant: 'titleImageTextImage',
  textcolor: 'light',
  bgcolor: 'purple',
};

export const Button = Template.bind({});
Button.argTypes = argTypes({ localVariants: variantKeys });
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
        code: ``,
      },
    },
  },
};