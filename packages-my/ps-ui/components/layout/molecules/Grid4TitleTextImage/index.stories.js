import { css } from '@emotion/react';
import vars from '@ps/ui/styles/vars';
import React from 'react';

import Grid4TitleTextImage from '.';

export default {
  component: Grid4TitleTextImage,
  title: 'layout/molecules/Grid4TitleTextImage',
};

const Template = (args) => <Grid4TitleTextImage {...args} />;

export const SetCustomCSSWidth = Template.bind({});
SetCustomCSSWidth.args = {
  variant: 'title-image-text-image',
  image: (
    <img
      css={css``}
      src="https://cdn.sstatic.net/Img/teams/teams-illo-free-sidebar-promo.svg?v=47faa659a05e"
    />
  ),
  text: (
    <p css={css``}>
      This is the text. This is the text. This is the text. This is the text.
      This is the text. This is the text. This is the text. This is the text.
      This is the text. This is the text. This is the text. This is the text.
      This is the text.{' '}
    </p>
  ),
  title: <h1 css={css``}>This is the title</h1>,
};
