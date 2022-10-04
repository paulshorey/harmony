import Template, { code } from '../../../components/form/atoms/Button/_story';
import description from './_story.md';
import { Component } from '../../../components/form/atoms/Button';

export const VariantsAndColors = Template.bind({});

export default {
  component: Component,
  id: '5',
  title: 'Variants And Colors',
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
