import { action } from '@storybook/addon-actions';
import { Story } from '@storybook/react';
import React from 'react';

import Error from '.';

export default {
  component: Error,
  title: 'Design Systems/molecules/Error',
};

const onClick = action('on click');

const Template: Story = () => {
  return (
    <Error
      buttonText="Go to home"
      icon="error"
      onClick={onClick}
      subtitle="Please try again later"
      title="Something went wrong"
    />
  );
};

export const Default = Template.bind({});

Default.args = {};

Default.parameters = {};
