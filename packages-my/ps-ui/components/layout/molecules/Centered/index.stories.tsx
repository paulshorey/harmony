import { css } from '@emotion/react';
import disableDefaultArgs from '@ps/ui/.storybook/utils/disable-default-args';
import React from 'react';

import Center from '.';

export default {
  component: Center,
  argTypes: {
    ...disableDefaultArgs,
  },
};

const Template = (args: any) => <Center {...args} />;

export const Centered = Template.bind({});
Centered.args = {
  css: css`
    max-width: 400px;
  `,
  children: (
    <>
      Just like the depreciated HTML {'<'}center{'>'} tag, but better, more
      functional. If you set the width narrower than the contents, the contents
      will still be centered! Great for titles!
      <h3 className="nowrap" style={{ fontWeight: 'bold' }}>
        This title tag has global className="nowrap", so it's forced to stay on
        line.
      </h3>
      A regular style text-align:center element would break because of that
      forced extra long line, but this one is still centered. You could set
      overflow:hidden/scroll, and for article/footer you should, but you don't
      want to do that for titles or headings. This fixes the problem. The extra
      width is visible, like overflow:visible, but equally on both left/right
      sides, instead of just on one side.
      <p>
        <br />
        <b>It's hard to explain this use case. Hope this makes sense. </b>You
        would not actually use this for very long text, just short titles where
        one of the lines has className="nowrap". Also it's usually only a
        problem with mobile sizes.
      </p>
      <p>
        If you don't set a width, then it will behave like a normal element with
        text-align:center
      </p>
    </>
  ),
};
