import React from 'react';
import { css } from '@emotion/react';
import vars from 'src/styles/vars';
import Grid from '.';
import Title from 'src/components/atoms/Title';
import Text from 'src/components/atoms/Text';
import Picture from 'src/components/atoms/Picture';

const style = css`
  border: solid 1px blue;

  > * {
    border: solid 1px grey;
    padding: 5px;
  }
`;

export default {
  title: 'Design Systems/Atoms/Grid',
  component: Grid,
};

const Template = (args) => <Grid {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: (
    <>
      <h1>Grid</h1>
      <p>
        No matter what children you pass to this Grid component, it will render them as a CSS Grid.
        You can define how to render the grid by setting the <code>variant</code> (preferred) or{' '}
        <code>
          <b>css</b>
        </code>
        . By default, it will assume 2 children, and put them next to each other in one row.
      </p>
      <blockquote>
        NOTE1: If you pass more children than specified in the CSS, they will wrap to the next row,
        as they do with CSS Grid. <p>Contents of each cell are centered vertically by default.</p>
      </blockquote>
      <blockquote>
        NOTE2: You must pass multiple elements as children - NOT WRAPPED in a parent div.
      </blockquote>
    </>
  ),
};

export const Default_withCustomCSS = Template.bind({});
Default_withCustomCSS.args = {
  children: (
    <>
      <h1>On desktop,</h1>
      <p>
        these render horizontally <br />
        (grid-template-columns: 1fr 1fr 1fr 1fr)
      </p>
      <h2>On mobile,</h2>
      <p>
        these stack vertically <br />
        (like they do by default)
      </p>
    </>
  ),
  css: [
    style,
    css`
      grid-template-columns: 1fr 1fr 1fr 1fr;
    `,
  ],
};

export const Variant_twoLeftOneRight = Template.bind({});
Variant_twoLeftOneRight.args = {
  variant: 'twoLeftOneRight',
  children: (
    <>
      <div className="leftTop">
        <b>Title (className="leftTop")</b>
      </div>
      <div className="leftBottom">
        This text displays BELOW the image on mobile. Without CSS Grid, it would render ABOVE the
        image. Resize your browser to test. (className="leftBottom")
      </div>
      <div className="right">
        <code>
          [ <br />
          <br />
          Lets pretend this block is an image. Notice the text to the left below the title. <br />
          <br />
          On mobile (small screens), it will be put below this image. <br />
          <br />
          (className="right") <br />
          <br />]
        </code>
      </div>
    </>
  ),
  css: style,
};
