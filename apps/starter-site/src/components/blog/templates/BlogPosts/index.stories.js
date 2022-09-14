import React from 'react';
import BlogPosts from './index';
import data from 'src/mocks/blog';

const { posts, category, categories, images: media } = data;

export default {
  title: 'Design Systems/Templates/BlogPosts',
  component: BlogPosts,
};

const Template = (args) => <BlogPosts {...args} />;

export const AllArticles = Template.bind({});
AllArticles.args = {
  posts,
  categories,
  media,
};

export const SpecificCategory = Template.bind({});
SpecificCategory.args = {
  posts,
  category,
  categories,
  media,
};
