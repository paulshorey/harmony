import { Story } from '@storybook/react';

import Icon, { Props } from '.';

export default {
  component: Icon,
  title: 'Design Systems/Atoms/Icon',
};

const Template: Story<Props> = (args) => <Icon {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: 'checkmark',
};

export const Custom = Template.bind({});
Custom.args = {
  height: 50,
  src: 'https://spiralgenericstorage.s3.us-east-2.amazonaws.com/images/+icon+%2B+checkmark%403x.png',
  style: 'border: 1px solid red;',
  type: 'checkmark',
  width: 50,
};
