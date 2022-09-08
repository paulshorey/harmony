import { Story } from '@storybook/react';
import React from 'react';

import Box, { BoxProps } from '../Box';
import Flex from '.';

export default {
  component: Flex,
  title: 'Design Systems/Atoms/Flex',
};

const Template: Story<BoxProps> = (args) => (
  <Flex {...args}>
    <Box bg="pink" m={4} p={12} />
    <Box bg="pink" m={4} p={12} />
  </Flex>
);

export const Default = Template.bind({});

Default.args = {
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'space-between',
};
