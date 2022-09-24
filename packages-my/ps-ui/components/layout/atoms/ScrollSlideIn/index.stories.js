import { css } from '@emotion/react';
import React from 'react';

import Comp from '.';

export default {
  component: Comp,
  title: 'layout/atoms/Scroll Slide In',
  parameters: {
    docs: {
      source: {
        code: `
  <div>
  <p
  css={css\`
    height: 800px;
  \`}>
    👇 Scroll down{' '}
  </p>
  <ScrollSlideIn
  css={css\`
    padding: 0 11vw;
  \`}
  >
    <h1>This content will slide in when entering the viewport. </h1>
    <p>
      🤓 But if you loaded the page and it's already scrolled to this
      content, then it would always be visible with no transition.
    </p>
    <p>
      😭 It's laggy inside Storybook. Click the icon in the top right corner
      of this purple area to open it in its own tab.
    </p>
  </ScrollSlideIn>
  <p
  css={css\`
    height: 400px;
  \`}>
  </p>
</div>
  `,
      },
    },
  },
};

const Template = (args) => <div {...args} />;

export const ScrollSlideIn = Template.bind({});
ScrollSlideIn.args = {
  children: (
    <div>
      <p
        css={css`
          height: 800px;
        `}
      >
        👇 Scroll down{' '}
      </p>
      <Comp
        css={css`
          padding: 0 11vw;
        `}
      >
        <h1>This content will slide in when entering the viewport. </h1>
        <p>
          🤓 But if you loaded the page and it's already scrolled to this
          content, then it would always be visible with no transition.
        </p>
        <p>
          😭 It's laggy inside Storybook. Click the icon in the top right corner
          of this purple area to open it in its own tab.
        </p>
      </Comp>
      <p
        css={css`
          height: 400px;
        `}
      ></p>
    </div>
  ),
};
