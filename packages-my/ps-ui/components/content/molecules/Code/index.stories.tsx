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

export const Code = Template.bind({});
Code.args = {
  css: (theme: t) => css`
    max-width: 400px;
  `,
  string: `Just likeasdfafsd`,
};
