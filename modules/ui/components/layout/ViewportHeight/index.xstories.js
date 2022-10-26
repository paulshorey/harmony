import React from 'react';
import Picture from 'src/components/atoms/Picture';

export default {
  title: 'Design Systems/Atoms/Picture',
  component: Image,
};

const Template = (args) => <Picture {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: 'https://res.cloudinary.com/spiral/image/upload/v1622235566/aboutus-page/logo-bankingdive.png',
  alt: 'Banking Dive',
  width: 300,
  height: 100,
  notLazy: true,
};
