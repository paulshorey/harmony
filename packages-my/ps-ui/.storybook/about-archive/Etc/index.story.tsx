import React from 'react';
import GenericComponent from 'components/content/atoms/Block';

import Template from './_story';
import description from './_story.md';

export const Etc = Template;

export default {
  component: GenericComponent,
  id: '9',
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