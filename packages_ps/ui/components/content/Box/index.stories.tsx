import { Component } from '.';
import _box from './_box';
// import _centered from "./_centered";
// import _code from "./_code";
import description from './_description.md';
import { argTypes } from '@ps/ui/styles/storybook';
import variants from './variants';
const variantKeys = Object.keys(variants);

export const Box = _box.bind({});
Box.argTypes = argTypes(variantKeys);
Box.args = {
  variants: ['textGradient', 'borderBottom'],
  as: 'span',
  ss: '.nowrap {color: orange;}',
  color: 'orange',
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
        code: ``,
      },
    },
  },
};
