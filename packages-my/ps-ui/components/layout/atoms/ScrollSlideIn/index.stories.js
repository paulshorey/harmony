import React from 'react';

import Comp from '.';

export default {
  component: Comp,
  title: 'layout/atoms/Scroll Slide In',
};

const Template = (args) => <Comp {...args} />;

export const ScrollSlideIn = Template.bind({});
ScrollSlideIn.args = {
  children: (
    <div>
      <h1>asdfsdfdfdf</h1>
    </div>
  ),
};
