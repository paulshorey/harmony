import Comp from '.';
import descriptionMd from './__story__/description.md';
import Template from './__story__/Template';

export const Inline = Template.bind({});
Inline.args = {
  as: 'h3',
};
// export const Code = Template.bind({});
// Code.args = {
//   as: 'code',
// };

export default {
  component: Comp,
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
