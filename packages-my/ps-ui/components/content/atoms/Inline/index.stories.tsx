import { css } from '@emotion/react';
import { InlineUnstyled } from '.';
import Template from './_story';
import description from './_story.md';
import localV from './variants';
import globalV from '@ps/ui/styles/variants';
import { colorKeys, colorHues, colorShades } from '@ps/ui/styles/colors';
const variants = Object.keys({
  ...localV,
  // '-----⌃local⌃----------⌄global⌄-----': true,
  // ...globalV,
});

export const Inline = Template.bind({});
Inline.args = {
  as: 'i',
  ss: 'line-height:1.5;color:orange;',
  variants: variants,
  variant: '',
  hue: 'cta1',
  shade: '',
};
Inline.argTypes = {
  // ref: { table: { disable: true } },
  variants: {
    control: {
      type: 'multi-select',
    },
    options: variants,
  },
  // color: {
  //   control: {
  //     type: 'select',
  //   },
  //   options: colorKeys,
  // },
  hue: {
    control: {
      type: 'select',
    },
    options: colorHues,
  },
  shade: {
    control: {
      type: 'select',
    },
    options: colorShades,
  },
};

export default {
  component: InlineUnstyled,
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
