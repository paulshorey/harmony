import Template, { code } from './_story';
import description from './_story.md';
import { Component } from '.';

export const Button = Template.bind({});

export default {
  component: Component,
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
