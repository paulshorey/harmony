import React from 'react';
import Text from './index';

export default {
  title: 'Design Systems/Atoms/Text',
  component: Text,
};

const Template = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
  tag: null,
  children: (
    <>
      This is some text. By default, it will be rendered in a simple paragraph tag with default
      styles. Font-weight, font-size, font-family, line-height, padding, margin, and letter-spacing
      are all important to keep consistent. So anytime you want to render a text, use {'<'}Text{'>'}
      . <br />
      <br />
      By default, any text/JSX you pass in as children - all will be wrapped in a {'<'}p{'>'} tag.
      But, you can specify what HTML tag to use with the optional "tag" prop.
    </>
  ),
};

export const CustomTag = Template.bind({});
CustomTag.args = {
  tag: 'b',
  children: (
    <>
      This will be rendered inside an inline {'<'}b{'>'}. Otherwise, the text be styled the same as
      inside the paragraph. <br />
      <br />
      NOTICE HOW even though it's in a bold tag, the text styles stay exactly the same. Same deal
      with the {'<'}Title{'>'} component. HTML structure and CSS styles are separated. This is
      because the website often requires conflicting design or SEO changes.
    </>
  ),
};
