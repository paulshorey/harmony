import { css } from '@emotion/react';
import Center from '@ps/ui/components/layout/molecules/Centered';
import vars from '@ps/ui/styles/vars';
import React from 'react';

import TheComponent from '.';

export default {
  component: TheComponent,
};

const Template = ({ args }) => (
  <Center>
    <TheComponent
      variant={'title-image-text-image'}
      image={
        <img src="https://cdn.sstatic.net/Img/teams/teams-illo-free-sidebar-promo.svg?v=47faa659a05e" />
      }
      text={
        <p>
          On desktop, this text is shown left of the image. <br /> But on
          mobile, this is rendered below the image.{' '}
        </p>
      }
      title={<h1>This is the title</h1>}
    />
  </Center>
);

export const Grid4TitleTextImage = Template.bind({});
Grid4TitleTextImage.args = {};
