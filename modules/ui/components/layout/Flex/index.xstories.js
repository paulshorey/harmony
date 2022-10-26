import React from 'react';
import { css } from '@emotion/react';
import vars from 'src/styles/vars';
import Flex from '.';
import styles from './styles';

const style = css`
  border: solid 1px blue;

  > * {
    border: solid 1px grey;
    padding: 5px;
  }
`;

export default {
  title: 'Design Systems/Atoms/Flex',
  component: Flex,
};

const Template = (args) => <Flex {...args} />;
const variants = Object.keys(styles);
const argTypes = {
  variant: {
    options: variants,
    control: { type: 'select' },
  },
  variants: {
    options: variants,
    control: { type: 'multi-select' }, // Automatically inferred when 'options' is defined
  },
};

export const DefaultVariant = Template.bind({});
DefaultVariant.argTypes = argTypes;
DefaultVariant.args = {
  variant: 'default',
  children: (
    <>
      <h1>On desktop,</h1>
      <p>these render horizontally</p>
      <h2>On mobile,</h2>
      <p>these stack vertically</p>
    </>
  ),
  css: [style, css``],
};
