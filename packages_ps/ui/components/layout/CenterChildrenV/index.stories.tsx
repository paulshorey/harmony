import { Component } from '.';
import Template, { code } from './_story';
import description from './_story.md';
import { argTypes } from '@ps/ui/styles/storybook';
import variants from './variants';
const variantKeys = Object.keys(variants);
const args = {
  classNames: ['bgColor'],
  color: '',
  shade: '',
  ss: 'min-height: 400px;',
};

export const CenterChildrenV = Template.bind({});
CenterChildrenV.argTypes = argTypes(variantKeys);
CenterChildrenV.args = args;

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
