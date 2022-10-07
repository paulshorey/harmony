import Template, { code } from '../Buttons/_story';
import description from './_story.md';
import { Component } from 'components/form/atoms/Button';

export const VariantsAndVariables = Template.bind({});

export default {
  component: Component,
  id: '5',
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
