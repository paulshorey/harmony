import { css } from '@emotion/react';
import { CenteredUnstyled } from '.';
import Template from './_story';
import description from './_story.md';
import localV from './variants';
import globalV from '@ps/ui/styles/variants';
import { colorKeys, colorHues, colorShades } from '@ps/ui/styles/colors';

export const Centered = Template.bind({});
Centered.args = {
  ss: 'max-width: 400px; .nowrap {color: orange;}',
  variants: ['textGradient'],
  variant: 'bg',
  hue: 'cta1',
  shade: 'onLight',
};
Centered.argTypes = {
  // ref: { table: { disable: true } },
  variants: {
    control: {
      type: 'multi-select',
    },
    options: Object.keys({
      ...localV,
      '-----⌃local⌃----------⌄global⌄-----': true,
      ...globalV,
    }),
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
  component: CenteredUnstyled,
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
