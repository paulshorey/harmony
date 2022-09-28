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

const Template = (args: any) => {
  return (
    <div>
      <p>#Accessible!</p>
      <input placeholder="hit Tab key to focus inside each field" />
      <p>#ADA #WCAG Compliant!</p>
      <textarea>
        Then notice what happens when you hit Tab when the Modal is opened, then
        after it's closed.
      </textarea>
      <p>...</p>
      <Comp isOpen={true} {...args}>
        <h2>Hello! This title is inside a modal</h2>
        <p>
          ad adsf afd fd afds afd fads fd fds fds afd afd afsd afds afsd fads
          fads fasd afsd afds afsd fads afds afsd afsd asdf
        </p>
      </Comp>
      <p>...</p>
      <input placeholder="another input field to test focus with" />
      <p>...</p>
    </div>
  );
};

export const Modal = Template.bind({});
Modal.args = {};
