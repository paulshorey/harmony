import { Story } from '@storybook/react';

import { BoxProps } from '../Box';
import Text from '.';

export default {
  component: Text,
  title: 'Design Systems/Atoms/Text',
};

const Template: Story<BoxProps> = (args) => <Text {...args} />;

export const Default = Template.bind({});

Default.args = {
  as: 'p',
  children: 'I am a text paragraph! I can be p or span',
  color: 'black',
  fontSize: 2,
  mt: 6,
  textAlign: 'center',
};
