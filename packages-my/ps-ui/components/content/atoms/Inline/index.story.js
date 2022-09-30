import { Component } from '.';
import descriptionMd from './_story.md';
import Template from './_story';
// import localV from './variants';
// import globalV from '@ps/ui/styles/variants';
// const variants = { ...localV, ...globalV };

export const Inline = Template.bind({});
// Inline.argTypes = {
//   ...Inline.argTypes,
//   variants: {
//     control: {
//       type: 'multi-select',
//     },
//     description:
//       '**`Array<string>`** In Storybook, use multi-select 👉. Hold Cmd to select another. Light colored row means it is selected.',
//     options: Object.keys(variants), // Automatically inferred when 'options' is defined
//   },
// };
// Inline.args = {
//   as: 'h3',
//   variants: ['gradientBg', 'onDark', 'padding'],
// };

export default {
  component: Component,
  parameters: {
    viewMode: 'docs',
    previewTabs: {
      canvas: { hidden: true },
    },
    docs: {
      description: {
        component: descriptionMd,
      },
      source: {
        code: `
`,
      },
    },
  },
};
