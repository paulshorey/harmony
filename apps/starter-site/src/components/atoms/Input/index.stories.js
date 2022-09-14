import React from 'react';
import Input from '.';

export default {
  title: 'Design Systems/Atoms/Input',
  component: Input,
};

const Template = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: 'input text',
};
