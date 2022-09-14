import React from 'react';
import JoinCTA from './index';

export default {
  title: 'Design Systems/Organisms/JoinCTA',
  component: JoinCTA,
};

const Template = (args) => <JoinCTA {...args} />;

export const Default = Template.bind({});
Default.args = {
  notLazy: false,
};
