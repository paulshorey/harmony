import React from 'react';
import Title from './index';
import { css } from '@emotion/react';
import vars from 'src/styles/vars';

export default {
  title: 'Design Systems/Atoms/Title',
  component: Title,
};

const Template = (args) => <Title {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: (
    <>
      This is a boring default title. By default, this component renders an {'<'}h5{'>'} HTML tag.
      Even though this looks like paragraph text, it actually uses a heading tag. (The default style
      is actually different from a paragraph text. Compare to default {'<'}Text{'>'} component,
      which is thinner.)
    </>
  ),
};

export const tag_2_variant_thin_pink_2 = Template.bind({});
tag_2_variant_thin_pink_2.args = {
  tag: 'h2',
  variants: ['thin', 'pink', '2'],
  children: <>Renders a thin pink H2</>,
};

export const tag_1_variant_medium_3 = Template.bind({});
tag_1_variant_medium_3.args = {
  tag: 'h1',
  variants: ['medium', '3'],
  children: <>Renders an H1 that looks like a bold H3</>,
};

export const tag_3_variant_medium_4_centered_nowrap = Template.bind({});
tag_3_variant_medium_4_centered_nowrap.args = {
  tag: 'h3',
  variants: ['medium', '4', 'center'],
  children: (
    <>
      Renders an H3 that looks like an H4, <span className="nowrap">centered on screen.</span>{' '}
      <span className="nowrap">Notice the css.</span>{' '}
      <span className="nowrap">
        The (global) "nowrap" classNames controls how text should wrap.
      </span>{' '}
    </>
  ),
  css: () => css`
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
  `,
};
