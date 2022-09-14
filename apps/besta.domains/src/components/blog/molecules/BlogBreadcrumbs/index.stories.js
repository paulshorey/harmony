import React from 'react';
import BlogBreadcrumbs from './index';
import wpDummyData from 'src/mocks/blog';

export default {
  title: 'Design Systems/Organisms/BlogBreadcrumbs',
  component: BlogBreadcrumbs,
};

const Template = (args) => <BlogBreadcrumbs {...args} />;

export const CategorySelected = Template.bind({});
CategorySelected.args = {
  categoryId: wpDummyData.categories[1].id,
  categories: wpDummyData.categories,
};

export const NoCategorySelected = Template.bind({});
NoCategorySelected.args = {
  categoryId: null,
  categories: wpDummyData.categories,
};
