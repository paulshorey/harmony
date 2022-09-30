import disableDefaultArgs from '@ps/ui/.storybook/utils/disable-default-args';
import Template from './__story__/Template';
import Comp from '.';
import styles from './styles';

export default {
  component: Comp,
  parameters: {
    docs: {
      description: {
        component: `
Try :hover, then :focus on both light/dark variants. Try alternative variants.
        `,
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
    options: Object.keys(styles), // Automatically inferred when 'options' is defined
  },
};
Button.args = {
  variants: ['default'],
  children: 'Submit',
};
