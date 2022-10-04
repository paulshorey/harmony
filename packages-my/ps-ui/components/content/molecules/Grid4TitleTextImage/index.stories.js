import { Component } from '.';
import Template from './_story';
import description from './_story.md';
import { argTypes } from 'styles/storybook';
import variants from './variants';
const variantKeys = Object.keys(variants);
const args = {
  ss: '',
  variants: ['title-image-text-image'],
  variant: '',
  color: '',
  shade: '',
};

export const Grid4TitleTextImage = Template.bind({});
Grid4TitleTextImage.argTypes = argTypes(variantKeys);
Grid4TitleTextImage.args = args;

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