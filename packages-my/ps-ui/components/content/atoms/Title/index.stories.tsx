import { css } from '@emotion/react';
import disableDefaultArgs from '@ps/ui/.storybook/utils/disable-default-args';
import React from 'react';

import Comp from '.';
import styles from './styles';

const variants = Object.keys(styles);
export default {
  component: Comp,
  argTypes: {
    ...disableDefaultArgs,
    variants: {
      control: {
        type: 'multi-select',
      },
      options: variants, // Automatically inferred when 'options' is defined
    },
  },
};

const Template = (args: any) => <Comp {...args} />;

export const Title = Template.bind({});
Title.args = {
  variants: [''],
  children: <>asffdsfdsf</>,
};
