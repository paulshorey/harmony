import disableDefaultArgs from '@ps/ui/.storybook/utils/disable-default-args';
import Template from './_story';
import Comp from '.';
import variants from './variants';

export default {
  component: Comp,
  parameters: {
    docs: {
      description: {
        component: `Try :hover, then :focus on both light/dark variants. Try alternative variants.`,
      },
      source: {
        code: `
        `,
      },
    },
  },
};

export const Button = Template.bind({});
Button.argTypes = {
  ...disableDefaultArgs,
  variants: {
    control: {
      type: 'multi-select',
    },
    options: Object.keys(variants), // Automatically inferred when 'options' is defined
  },
};
Button.args = {
  variants: ['default', 'text'],
  children: 'Submit',
};
