import { css } from '@emotion/react';
import React from 'react';

import Gradient from '.';

export default {
  title: 'layout/molecules/GradientBackground',
  component: Gradient,
};

const Template = (args: any) => <Gradient {...args} />;

export const GradientBackground = Template.bind({});
GradientBackground.args = {
  children: (
    <div
      css={css`
        padding: 100px;
        border: 2px solid white;
        border-radius: 25px;
      `}
    >
      Try changing the `variants` prop to see different gradient styles.
    </div>
  ),
};
