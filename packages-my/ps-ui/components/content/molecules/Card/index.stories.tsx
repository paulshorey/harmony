import { CardUnstyled } from '.';
import variants from './variants';
import Template from './_story';
const description = ``;

export const Card = Template.bind({});
Card.args = {
  ss: `max-width: 400px;
.nowrap {color:orange;}`,
  variants: Object.keys(variants),
};
Card.argTypes = {
  // ref: { table: { disable: true } },
  variants: {
    control: {
      type: 'multi-select',
    },
    options: Object.keys(variants),
    // description: 'adsfsfdfds asdf s d sf',
  },
};

export default {
  component: CardUnstyled,
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
