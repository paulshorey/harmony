import disableDefaultArgs from '@ps/ui/.storybook/utils/disable-default-args';

// import { action } from '@storybook/addon-actions';
import Comp from '.';
import styles from './styles';

export default {
  component: Comp,
};

const Template = (args: any) => <Comp {...args} />;
const variants = Object.keys(styles);
const argTypes = {
  ...disableDefaultArgs,
  variants: {
    control: {
      type: 'multi-select',
    },
    options: variants, // Automatically inferred when 'options' is defined
  },
};

export const Button = Template.bind({});
Button.argTypes = argTypes;
Button.args = {
  variants: ['default'],
  children: 'Submit',
};
