import { Story } from '@storybook/react';

import Card, { Props } from '.';

export default {
  component: Card,
  title: 'Design Systems/Molecules/Card',
};

const Template: Story<Props> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: [<div key={1}>Test</div>],
};
