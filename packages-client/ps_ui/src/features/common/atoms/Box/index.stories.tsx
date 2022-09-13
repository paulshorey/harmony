import { Story } from '@storybook/react';

import Box, { BoxProps } from '.';

export default {
  component: Box,
  title: 'Design Systems/atoms/Box',
};

const Template: Story<BoxProps> = (args) => <Box {...args}>I&apos;m A BOX</Box>;

export const Default = Template.bind({});

Default.args = {
  border: '1px solid black',
  fontSize: 32,
  mt: 12,
  pb: 12,
};
