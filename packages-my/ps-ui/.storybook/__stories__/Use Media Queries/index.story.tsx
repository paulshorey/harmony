import React from 'react';
import GenericComponent from '../../../components/content/atoms/Block';

import Template from './_story';
import description from './_story.md';

export const UseMediaQueries = Template;

export default {
  component: GenericComponent,
  id: '2',
  argTypes: {},
  isExpanded: true,
  parameters: {
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
