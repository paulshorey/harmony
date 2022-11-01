import { Component } from '.';
import Template, { code } from './_story';
import description from './_story.md';

const args = {};

export const Dropdown = Template.bind({});
Dropdown.args = args;

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
