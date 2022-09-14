import React from 'react';
import List from './index';

export default {
  title: 'Design Systems/Atoms/List',
  component: List,
};

const Template = (args) => <List {...args} />;

export const ULTag = Template.bind({});
ULTag.args = {
  tag: 'ul',
  children: (
    <>
      <li>This variant</li>
      <li>expects multiple children.</li>
      <li>Each child should be</li>
      <li>
        a {'<'}li{'>'} tag.
      </li>
    </>
  ),
};

export const ULTag_Variant_checkmarks = Template.bind({});
ULTag_Variant_checkmarks.args = {
  tag: 'ul',
  variant: 'ulCheck',
  children: (
    <>
      <li>This variant</li>
      <li>expects multiple children.</li>
      <li>Each child should be</li>
      <li>
        a {'<'}li{'>'} tag.
      </li>
    </>
  ),
};

export const ULTag_Variant_hearts = Template.bind({});
ULTag_Variant_hearts.args = {
  tag: 'ul',
  variant: 'ulHeart',
  children: (
    <>
      <li>This variant</li>
      <li>expects multiple children.</li>
      <li>Each child should be</li>
      <li>
        a {'<'}li{'>'} tag.
      </li>
    </>
  ),
};

export const ULTag_Variant_shields = Template.bind({});
ULTag_Variant_shields.args = {
  tag: 'ul',
  variant: 'ulShield',
  children: (
    <>
      <li>This variant</li>
      <li>expects multiple children.</li>
      <li>Each child should be</li>
      <li>
        a {'<'}li{'>'} tag.
      </li>
    </>
  ),
};
