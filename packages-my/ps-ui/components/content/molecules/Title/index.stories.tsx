import { css } from '@emotion/react';
import disableDefaultArgs from '@ps/ui/.storybook/utils/disable-default-args';
import React from 'react';

import Comp from '.';

export default {
  component: Comp,
  argTypes: {
    ...disableDefaultArgs,
  },
};

const Template = (args: any) => <Comp {...args} />;

export const Title = Template.bind({});
Title.args = {
  css: css`
    max-width: 400px;
  `,
  children: <>asffdsfdsf</>,
};
