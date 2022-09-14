import React from 'react';
import Picture from 'src/components/atoms/Picture';

export default {
  title: 'Design Systems/Atoms/Picture',
  component: Picture,
};

const Template = (args) => <Picture {...args} />;

export const SetWidth = Template.bind({});
SetWidth.args = {
  src: 'https://res.cloudinary.com/spiral/image/upload/v1622235566/aboutus-page/img-2.png',
  alt: 'Our Mission',
  width: 725,
  height: 358,
  widthCSS: '100%',
  notLazy: true,
};

export const SetWidthAndHeight = Template.bind({});
SetWidthAndHeight.args = {
  src: 'https://res.cloudinary.com/spiral/image/upload/v1621616067/home-page/2-img.png',
  alt: 'Our Mission',
  width: 601,
  height: 600,
  widthCSS: '100%',
  cssHeight: '400px',
  notLazy: true,
};
