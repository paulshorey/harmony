import disableDefaultArgs from '@ps/ui/.storybook/utils/disable-default-args';
import { action } from '@storybook/addon-actions';

import Comp from '.';
import styles from './styles';

const handleFocus = action('Select focused');

export default {
  component: Comp,
};

const Template = (args: any) => <Comp {...args} />;
const variants = Object.keys(styles);
const argTypes = {
  ...disableDefaultArgs,
  onFocus: { table: { disable: true } },
  variant: { table: { disable: true } },
  variants: {
    control: {
      type: 'multi-select',
    },
    options: variants, // Automatically inferred when 'options' is defined
  },
};

export const Select = Template.bind({});
Select.argTypes = argTypes;
Select.args = {
  variants: [''],
  value: 'SelectedValue',
  onFocus: handleFocus,
};
