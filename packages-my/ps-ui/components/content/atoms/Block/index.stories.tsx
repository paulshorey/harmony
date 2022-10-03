import { css } from '@emotion/react';
import { BlockUnstyled } from '.';
import Template from './_story';
import description from './_story.md';
import localV from './variants';
import globalV from '@ps/ui/styles/variants';
import { colorGroups } from '@ps/ui/styles/colors';
const variants = Object.keys({
  ...localV,
  '-----⌃local⌃----------⌄global⌄-----': true,
  ...globalV,
});

export const Block = Template.bind({});
Block.args = {
  ss: 'line-height:1.5;',
  variants: variants,
  variant: '',
  color: 'cta1',
  size: '',
};
Block.argTypes = {
  // ref: { table: { disable: true } },
  variants: {
    control: {
      type: 'multi-select',
    },
    options: variants,
  },
  color: {
    control: {
      type: 'select',
    },
    options: colorGroups,
  },
};

export default {
  component: BlockUnstyled,
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
  // Button.args = {
  //   variants: ['default', 'text'],
  //   children: 'Submit',
  // };
};
