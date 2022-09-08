import { Story } from '@storybook/react';
import React from 'react';

const createStory = (Component: any, props: any) => {
  const template: Story<typeof props> = (args) => {
    return <Component {...args} />;
  };
  const story = template.bind({});
  story.args = props;
  return story;
};

export default createStory;
