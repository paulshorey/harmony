import { Component } from '.';
import Template, { code } from './_story';
import description from './_story.md';
import { argTypes } from '@ps/ui/styles/storybook';
import variants from './styles';

const variantKeys = Object.keys(variants);
const args = {};

export const SelectMui = Template.bind({});
SelectMui.argTypes = argTypes({ localVariants: variantKeys });
SelectMui.args = args;

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
