import Center from '@ps/ui/components/content/molecules/Centered';
import React from 'react';

import Comp from '.';

export default {
  component: Comp,
};

const Template = ({ args }) => (
  <Center>
    <Comp
      variant={'title-image-text-image'}
      image={
        <img src="https://cdn.mqtatic.net/Img/teams/teams-illo-free-sidebar-promo.svg?v=47faa659a05e" />
      }
      text={
        <p>
          On desktop, this text is shown left of the image. <br /> But on
          mobile, this is rendered below the image.{' '}
        </p>
      }
      title={<h1>This is the title</h1>}
      {...args}
    />
  </Center>
);

export const Grid4TitleTextImage = Template.bind({});
Grid4TitleTextImage.args = {};
