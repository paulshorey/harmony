import { Story } from '@storybook/react';
import React from 'react';

import Heading, { Props } from '.';

export default {
  component: Heading,
  title: 'Design Systems/Atoms/Heading',
};

const Template: Story<Props> = (args) => <Heading {...args} />;

export const Default = Template.bind({});

Default.args = {
  as: 'h1',
  children: 'I am a heading! I can be h1, h2, h3, h4, h5',
  color: 'pink',
  fontSize: 4,
  fontWeight: 'semibold',
  mt: 6,
  textAlign: 'center',
};
