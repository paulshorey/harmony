import Comp from '.';
import descriptionMd from './__story__/description.md';
import Template from './__story__/Template';
import LocalStyles from './styles';
import ThemeStyles from '@ps/ui/styles/variants';
const styles = { ...LocalStyles, ...ThemeStyles };

export const Inline = Template.bind({});
Inline.argTypes = {
  ...Inline.argTypes,
  variants: {
    control: {
      type: 'multi-select',
    },
    description:
      '**`Array<string>`** In Storybook, use multi-select 👉. Hold Cmd to select another. Light colored row means it is selected.',
    options: Object.keys(styles), // Automatically inferred when 'options' is defined
  },
};
Inline.args = {
  as: 'h3',
  variants: ['gradientBg', 'onDark', 'padding'],
};

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
