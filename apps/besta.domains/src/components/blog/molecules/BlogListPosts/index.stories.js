import React from 'react';
import BlogListPosts from './index';
import wpDummyData from 'src/mocks/blog';

export default {
  title: 'Design Systems/Organisms/BlogListPosts',
  component: BlogListPosts,
};

const Template = (args) => <BlogListPosts {...args} />;

export const Default = Template.bind({});
Default.args = {
  posts: wpDummyData.posts,
  categories: wpDummyData.categories,
};
