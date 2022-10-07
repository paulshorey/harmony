import { Component } from '.';
import Template from './_story';
import description from './_story.md';
import { argTypes } from 'styles/storybook';
import variants from './variants';
import Block from '../Block';
const variantKeys = Object.keys(variants);
const args = {
  ss: '',
  variants: ['border-bottom', 'text-gradient'],
  variant: '',
  color: 'cta1',
  shade: '',
};

export const Inline = Template.bind({});
Inline.argTypes = argTypes(variantKeys);
Inline.args = args;

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
        code: `<Div as="p" shade="onDark" variant="text-color" ss="padding:2rem;">
  All div props and conditional rules still work here.{' '}
  <Span variant="borderBottom text-gradient" color="cta1">But this renders the element inline</Span> by
  default.
</Div>`,
      },
    },
  },
};
