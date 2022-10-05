import Template, { code } from './_story';
import description from './_story.md';
import { Component } from '.';

export const Buttons = Template.bind({});

export default {
  component: Component,
  id: '7',
  parameters: {
    docs: {
      description: {
        component: description,
      },
      source: {
        code: code,
      },
    },
  },
};
