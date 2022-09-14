import React from 'react';
import BlogPostBottom from './index';

export default {
  title: 'Design Systems/Organisms/BlogPostBottom',
  component: BlogPostBottom,
};

const Template = (args) => <BlogPostBottom {...args} />;

export const ShowOnlySocial = Template.bind({});
ShowOnlySocial.args = {
  showSocial: true,
};

export const ShowAll = Template.bind({});
ShowAll.args = {
  showSocial: true,
};
