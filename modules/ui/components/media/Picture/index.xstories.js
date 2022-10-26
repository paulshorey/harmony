import React from 'react';
import ImageCLS from './index';
import { css } from '@emotion/react';
import vars from 'src/styles/vars';

export default {
  title: 'Design Systems/Atoms/Picture',
  component: ImageCLS,
};

const Template = (args) => <ImageCLS {...args} />;

export const cropped = Template.bind({});
cropped.args = {
  crop: true,
  width: 725,
  height: 258,
  css: css`
    width: 100%;
  `,
  src: 'https://res.cloudinary.com/spiral/image/upload/v1622235566/aboutus-page/img-2.png',
  alt: 'Our Mission',
  notLazy: true,
};

export const contained = Template.bind({});
contained.args = {
  crop: false,
  width: 725,
  height: 258,
  css: css`
    width: 100%;
  `,
  src: 'https://res.cloudinary.com/spiral/image/upload/v1622235566/aboutus-page/img-2.png',
  alt: 'Our Mission',
  notLazy: true,
};

export const differentOnMobile = Template.bind({});
differentOnMobile.args = {
  src: 'https://res.cloudinary.com/spiral/image/upload/v1622235566/aboutus-page/img-2.png',
  width: 800,
  height: 400,
  srcSm: 'https://res.cloudinary.com/spiral/image/upload/v1621616067/home-page/2-img.png',
  widthSm: 332,
  heightSm: 332,
  crop: false,
  css: () => css`
    width: 100%;
    @media (max-width: 767px) {
      max-width: 450px;
      width: 80%;
      display: block;
      margin-left: auto;
      margin-right: auto;
    }
  `,
  alt: 'Our Mission',
  notLazy: true,
};

export const parentAddsWeirdCSSAndWrongSizeInURL = Template.bind({});
parentAddsWeirdCSSAndWrongSizeInURL.args = {
  src: 'https://res.cloudinary.com/spiral/image/upload/w_999,h_9/causes/stars.png',
  width: 109,
  height: 18,
  crop: false,
  css: () => css`
    display: inline-block !important;
    text-align: center;
    margin: 100px;
    border: solid 1px orange;
  `,
  alt: '5 Stars',
  notLazy: true,
};
