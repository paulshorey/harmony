import { Component } from '.';
import Template from './_story';
import description from './_story.md';
import { argTypes } from 'styles/storybook';
// import variants from './variants';
const variantKeys = [];
const args = {
  ss: '',
  variants: [''],
  variant: '',
  color: '',
  shade: '',
};

export const ScrollSlideIn = Template.bind({});
ScrollSlideIn.argTypes = argTypes([]);
ScrollSlideIn.args = args;

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
